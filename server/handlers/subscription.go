package handlers

import (
	"net/http"
	"strconv"
	dto "wayshub/dto/result"
	subscriptiondto "wayshub/dto/subscription"
	"wayshub/models"
	"wayshub/repositories"

	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type handlerSubscription struct {
	SubscriptionRepository repositories.SubscriptionRepository
}

func HandlerSubscription(SubscriptionRepository repositories.SubscriptionRepository) *handlerSubscription {
	return &handlerSubscription{SubscriptionRepository}
}

func (h *handlerSubscription) AddSubscription(c echo.Context) error {

	// get data user token
	userInfo := c.Get("userInfo").(jwt.MapClaims)
	userId := int(userInfo["id"].(float64))

	// subscribe, _ := strconv.Atoi(r.FormValue("subscribe"))

	userchanelId, _ := strconv.Atoi(c.FormValue("user_channel_id"))
	// println("ini apa ? ", userchanelId)
	request := subscriptiondto.Subscriber{
		UserChannelId: userchanelId,
	}

	// UserChannelId := 4
	subscription := models.Subscription{
		UserChannelId: request.UserChannelId,
		ChannelId:     userId,
	}
	// fmt.Println(subscription)

	subscription, _ = h.SubscriptionRepository.AddSubscription(subscription)

	subscription, _ = h.SubscriptionRepository.GetSubscription(subscription.ID)

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: subscription})
}

func (h *handlerSubscription) GetSubscription(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	subscription, err := h.SubscriptionRepository.GetSubscription(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: subscription})
}

func (h *handlerSubscription) Unsubscribe(c echo.Context) error {

	id, _ := strconv.Atoi(c.Param("id"))

	subscription, err := h.SubscriptionRepository.GetSubscription(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	data, err := h.SubscriptionRepository.Unsubscribe(subscription)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}
	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: data})
}
