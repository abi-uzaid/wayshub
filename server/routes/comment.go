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

	e.GET("/comments/:videoId/comments", middleware.Auth(h.FindComments))
	e.GET("/comments/:videoId/comment/:id", middleware.Auth(h.GetComment))
	e.POST("/comments/:videoId/comments", middleware.Auth(h.AddComment))
	e.PATCH("/comments/:videoId/comment/:id", middleware.Auth(h.EditComment))
	e.DELETE("/comments/:videoId/comment/:id", middleware.Auth(h.DeleteComment))
}
