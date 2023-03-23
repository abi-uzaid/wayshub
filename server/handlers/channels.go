package handlers

import (
	"net/http"
	"os"
	"strconv"
	authdto "wayshub/dto/auth"
	channelsdto "wayshub/dto/channels"
	dto "wayshub/dto/result"
	"wayshub/models"
	"wayshub/repositories"

	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type HandlerChannel struct {
	ChannelRepository repositories.ChannelRepository
}

func NewHandlerChannel(ChannelRepository repositories.ChannelRepository) *HandlerChannel {
	return &HandlerChannel{ChannelRepository}
}

func (h *HandlerChannel) FindChannels(c echo.Context) error {
	channels, err := h.ChannelRepository.FindChannels()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	for i, p := range channels {
		channels[i].Photo = os.Getenv("PATH_FILE") + p.Photo
	}

	for i, p := range channels {
		channels[i].Cover = os.Getenv("PATH_FILE") + p.Cover
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: channels})
}

func (h *HandlerChannel) GetChannel(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	channel, err := h.ChannelRepository.GetChannel(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: channel})
}

func (h *HandlerChannel) EditChannel(c echo.Context) error {
	ContexPhoto := c.Get("dataPhoto")
	filephoto := ContexPhoto.(string)
	ContexCover := c.Get("dataCover")
	filecover := ContexCover.(string)

	request := authdto.RegisterRequest{
		Channelname: c.FormValue("channelName"),
		Email:       c.FormValue("email"),
		Password:    c.FormValue("password"),
	}

	id, _ := strconv.Atoi(c.Param("id"))

	channel, err := h.ChannelRepository.GetChannel(int(id))
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	if request.Channelname != "" {
		channel.Channelname = request.Channelname
	}

	if request.Email != "" {
		channel.Email = request.Email
	}

	if request.Password != "" {
		channel.Password = request.Password
	}

	if filephoto != "false" {
		channel.Photo = filephoto
	}

	if filecover != "false" {
		channel.Cover = filecover
	}

	data, err := h.ChannelRepository.EditChannel(channel, id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: data})
}

func (h *HandlerChannel) DeleteChannel(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	userInfo := c.Get("userInfo").(jwt.MapClaims)
	userRole := userInfo["role"]
	userID := int(userInfo["id"].(float64))

	if userID != id && userRole != "admin" {
		return c.JSON(http.StatusUnauthorized, dto.ErrorResult{Code: http.StatusUnauthorized, Message: "you're not admin"})
	}

	channel, err := h.ChannelRepository.GetChannel(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	data, err := h.ChannelRepository.DeleteChannel(channel, id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: convertResponse(data)})
}

func convertResponse(u models.Channel) channelsdto.DeleteResponse {
	return channelsdto.DeleteResponse{
		ID: u.ID,
	}
}
