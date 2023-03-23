package handlers

import (
	"net/http"
	"os"
	"strconv"
	"time"
	dto "wayshub/dto/result"
	videodto "wayshub/dto/video"
	"wayshub/models"
	"wayshub/repositories"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

type handlerVideo struct {
	VideoRepository repositories.VideoRepository
}

func HandlerVideo(VideoRepository repositories.VideoRepository) *handlerVideo {
	return &handlerVideo{VideoRepository}
}

func (h *handlerVideo) AddVideo(c echo.Context) error {

	// Get dataFile from midleware and store to filethumbnail variable here ...
	dataContex := c.Get("dataThumbnail")
	filethumbnail := dataContex.(string)

	videoContex := c.Get("dataVideo")
	filevideo := videoContex.(string)

	request := videodto.VideoRequest{
		Title:       c.FormValue("title"),
		Description: c.FormValue("description"),
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	video := models.Video{
		Title:       request.Title,
		Thumbnail:   filethumbnail,
		Description: request.Description,
		Video:       filevideo,
		CreatedAt:   time.Now(),
	}

	video, err = h.VideoRepository.AddVideo(video)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	video, _ = h.VideoRepository.GetVideo(video.ID)

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: video})
}

func (h *handlerVideo) FindVideos(c echo.Context) error {

	videos, err := h.VideoRepository.FindVideos()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	for i, p := range videos {
		videos[i].Video = os.Getenv("PATH_FILE") + p.Video
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: videos})
}

func (h *handlerVideo) GetVideo(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	var video models.Video
	video, err := h.VideoRepository.GetVideo(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	video.Video = os.Getenv("PATH_FILE") + video.Video

	videos, err := h.VideoRepository.GetVideo(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: videos})
}

func (h *handlerVideo) EditVideo(c echo.Context) error {

	id, _ := strconv.Atoi(c.Param("id"))

	dataContex := c.Get("dataThumbnail")
	filethumbnail := dataContex.(string)

	videoContex := c.Get("dataVideo")
	filevideo := videoContex.(string)

	request := videodto.EditVideoRequest{
		Title:       c.FormValue("title"),
		Description: c.FormValue("description"),
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	video, _ := h.VideoRepository.GetVideo(id)

	if request.Title != "" {
		video.Title = request.Title
	}

	if filethumbnail != "false" {
		video.Thumbnail = filethumbnail
	}

	if request.Description != "" {
		video.Description = request.Description
	}

	if filevideo != "false" {
		video.Video = filevideo
	}

	video, err = h.VideoRepository.EditVideo(video)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}
	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: video})
}

func (h *handlerVideo) DeleteVideo(c echo.Context) error {

	id, _ := strconv.Atoi(c.Param("id"))

	video, err := h.VideoRepository.GetVideo(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	_, err = h.VideoRepository.DeleteVideo(video)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	data := models.Video{
		ID: video.ID,
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: convertResponseVideo(data)})
}

func convertResponseVideo(u models.Video) videodto.DeleteResponse {
	return videodto.DeleteResponse{
		ID: u.ID,
	}
}
