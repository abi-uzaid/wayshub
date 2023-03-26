package routes

import (
	"wayshub/handlers"
	"wayshub/pkg/middleware"
	"wayshub/pkg/postgres"
	"wayshub/repositories"

	"github.com/labstack/echo/v4"
)

func ChannelRoutes(e *echo.Group) {
	channelRepository := repositories.RepositoryChannel(postgres.DB)
	h := handlers.NewHandlerChannel(channelRepository)

	e.GET("/channels", middleware.Auth(h.FindChannels))
	e.GET("/channel/:id", middleware.Auth(h.GetChannel))
	e.PATCH("/channel", middleware.Auth((middleware.UploadPhoto(middleware.UploadCover(h.EditChannel)))))
	e.DELETE("/channel/:id", middleware.Auth(h.DeleteChannel))
}
