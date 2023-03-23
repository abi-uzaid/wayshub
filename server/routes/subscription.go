package routes

import (
	"wayshub/handlers"
	"wayshub/pkg/middleware"
	"wayshub/pkg/postgres"
	"wayshub/repositories"

	"github.com/labstack/echo/v4"
)

func SubscriptionRoutes(e *echo.Group) {
	subscriptionRepository := repositories.RepositorySubscription(postgres.DB)
	h := handlers.HandlerSubscription(subscriptionRepository)

	e.POST("/subscribe", middleware.Auth(h.AddSubscription))
	e.GET("/subscribe", middleware.Auth(h.GetSubscription))
	e.DELETE("/channel/{id}/subscribe/{id}", middleware.Auth(h.Unsubscribe))
}
