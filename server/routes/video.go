package routes

import (
	"wayshub/handlers"
	"wayshub/pkg/middleware"
	"wayshub/pkg/postgres"
	"wayshub/repositories"

	"github.com/labstack/echo/v4"
)

func VideoRoutes(e *echo.Group) {
	videoRepository := repositories.RepositoryVideo(postgres.DB)
	h := handlers.HandlerVideo(videoRepository)

	e.GET("/videos", middleware.Auth(h.FindVideos))
	e.GET("/video/{id}", middleware.Auth(h.GetVideo))
	e.POST("/video", middleware.Auth(middleware.UploadThumbnail(middleware.UploadVideo(h.AddVideo))))
	e.PATCH("/video/{id}", middleware.Auth(middleware.UploadThumbnail(middleware.UploadVideo(h.EditVideo))))
	e.DELETE("/video/{id}", middleware.Auth(h.DeleteVideo))
}
