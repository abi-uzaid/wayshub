package handlers

import (
	"context"
	"net/http"
	"os"
	"strconv"
	channelsdto "wayshub/dto/channels"
	dto "wayshub/dto/result"
	"wayshub/models"
	"wayshub/repositories"

	"github.com/cloudinary/cloudinary-go"
	"github.com/cloudinary/cloudinary-go/api/uploader"
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
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: channels})
}

func (h *HandlerChannel) GetChannel(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	var channel models.Channel
	channel, err := h.ChannelRepository.GetChannel(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: channel})
}

func (h *HandlerChannel) EditChannel(c echo.Context) error {
	userInfo := c.Get("userInfo")
	channelID := userInfo.(jwt.MapClaims)["id"].(float64)
	ContexPhoto := c.Get("dataPhoto")
	filephoto := ContexPhoto.(string)
	ContexCover := c.Get("dataCover")
	filecover := ContexCover.(string)

	var ctx = context.Background()
	var CLOUD_NAME = os.Getenv("CLOUD_NAME")
	var API_KEY = os.Getenv("API_KEY")
	var API_SECRET = os.Getenv("API_SECRET")

	// Add your Cloudinary credentials ...
	cld, _ := cloudinary.NewFromParams(CLOUD_NAME, API_KEY, API_SECRET)

	request := channelsdto.EditChannelRequest{
		Channelname: c.FormValue("channelName"),
		Description: c.FormValue("description"),
	}

	channel, err := h.ChannelRepository.GetChannel(int(channelID))
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	if request.Channelname != "" {
		channel.Channelname = request.Channelname
	}

	if request.Description != "" {
		channel.Description = request.Description
	}

	if filephoto != "false" { // Upload file to Cloudinary ...
		resp, err := cld.Upload.Upload(ctx, filephoto, uploader.UploadParams{Folder: "wayshub"})

		if err != nil {
			return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
		}
		channel.Photo = resp.SecureURL
	}

	if filecover != "false" { // Upload file to Cloudinary ...
		respCover, err := cld.Upload.Upload(ctx, filecover, uploader.UploadParams{Folder: "wayshub"})

		if err != nil {
			return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
		}
		channel.Cover = respCover.SecureURL
	}

	data, err := h.ChannelRepository.EditChannel(channel, int(channelID))
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
