package handlers

import (
	"net/http"
	"strconv"
	"time"
	commentdto "wayshub/dto/comment"
	dto "wayshub/dto/result"
	"wayshub/models"
	"wayshub/repositories"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type handlerComment struct {
	CommentRepository repositories.CommentRepository
}

func HandlerComment(CommentRepository repositories.CommentRepository) *handlerComment {
	return &handlerComment{CommentRepository}
}

func (h *handlerComment) AddComment(c echo.Context) error {
	// get data user token
	// println(r.Context())
	userInfo := c.Get("userInfo").(jwt.MapClaims)
	// fmt.Println(userInfo, " ini user info")
	userId := int(userInfo["id"].(float64))
	// fmt.Println(userId, "masuk sini ?")

	request := commentdto.CommentRequest{
		Comment: c.FormValue("comment"),
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	comment := models.Comment{
		ChannelID: userId,
		Comment:   request.Comment,
		CreatedAt: time.Now(),
	}

	comment, err = h.CommentRepository.AddComment(comment)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	comment, _ = h.CommentRepository.GetComment(comment.ID)

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: comment})
}

func (h *handlerComment) FindComments(c echo.Context) error {
	comments, err := h.CommentRepository.FindComments()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: comments})
}

func (h *handlerComment) GetComment(c echo.Context) error {

	id, _ := strconv.Atoi(c.Param("id"))

	comment, err := h.CommentRepository.GetComment(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: comment})
}

func (h *handlerComment) EditComment(c echo.Context) error {

	id, _ := strconv.Atoi(c.Param("id"))

	request := commentdto.CommentRequest{
		Comment: c.FormValue("comment"),
	}

	comment, err := h.CommentRepository.GetComment(int(id))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	if request.Comment != "" {
		comment.Comment = request.Comment
	}

	data, err := h.CommentRepository.EditComment(comment)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: data})
}

func (h *handlerComment) DeleteComment(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	comment, err := h.CommentRepository.GetComment(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	data, err := h.CommentRepository.DeleteComment(comment)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: convertResponseComment(data)})
}

func convertResponseComment(u models.Comment) commentdto.DeleteResponse {
	return commentdto.DeleteResponse{
		ID: u.ID,
	}
}
