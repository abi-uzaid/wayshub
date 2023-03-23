package routes

import (
	"wayshub/handlers"
	"wayshub/pkg/middleware"
	"wayshub/pkg/postgres"
	"wayshub/repositories"

	"github.com/labstack/echo/v4"
)

func CommentRoutes(e *echo.Group) {
	commentRepository := repositories.RepositoryComment(postgres.DB)
	h := handlers.HandlerComment(commentRepository)

	e.GET("/video/{id}/comments", middleware.Auth(h.FindComments))
	e.GET("/video/{id}/comment/{id}", middleware.Auth(h.GetComment))
	e.POST("/video/{id}/comments", middleware.Auth(h.AddComment))
	e.PATCH("/video/{id}/comment/{id}", middleware.Auth(h.EditComment))
	e.DELETE("/video/{id}/comment/{id}", middleware.Auth(h.DeleteComment))
}
