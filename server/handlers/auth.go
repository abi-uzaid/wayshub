package handlers

import (
	"fmt"
	"log"
	"net/http"
	"time"
	authdto "wayshub/dto/auth"
	dto "wayshub/dto/result"
	"wayshub/models"
	"wayshub/pkg/bcrypt"
	jwtToken "wayshub/pkg/jwt"
	"wayshub/repositories"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type handlerAuth struct {
	AuthRepository repositories.AuthRepository
}

func HandlerAuth(AuthRepository repositories.AuthRepository) *handlerAuth {
	return &handlerAuth{AuthRepository}
}

func (h *handlerAuth) Register(c echo.Context) error {
	request := new(authdto.RegisterRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	password, err := bcrypt.HashingPassword(request.Password)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	user := models.Channel{
		Email:       request.Email,
		Password:    password,
		Channelname: request.Channelname,
		Description: request.Description,
	}

	_, err = h.AuthRepository.Register(user)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	channelName := authdto.RegisterResponse{
		Email:       request.Email,
		Channelname: request.Channelname,
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: channelName})
}

func (h *handlerAuth) Login(c echo.Context) error {

	request := new(authdto.LoginRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	channels := models.Channel{
		Email:    request.Email,
		Password: request.Password,
	}

	channel, err := h.AuthRepository.Login(channels.Email)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	fmt.Println(channel)
	// Check password
	isValid := bcrypt.CheckPasswordHash(request.Password, channel.Password)
	if !isValid {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: "wrong email or password"})
	}

	//generate token
	claims := jwt.MapClaims{}
	claims["id"] = channel.ID
	claims["exp"] = time.Now().Add(time.Hour * 2).Unix() // 2 jam expired

	token, errGenerateToken := jwtToken.GenerateToken(&claims)
	if errGenerateToken != nil {
		log.Println(errGenerateToken)
		return echo.NewHTTPError(http.StatusUnauthorized)
	}

	loginResponse := authdto.LoginResponse{
		Channelname: channel.Channelname,
		Email:       channel.Email,
		Token:       token,
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: loginResponse})
}

func (h *handlerAuth) CheckAuth(c echo.Context) error {
	userInfo := c.Get("userInfo")
	channelID := userInfo.(jwt.MapClaims)["id"].(float64)

	// Check User by Id
	channel, err := h.AuthRepository.Getchannel(int(channelID))
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	CheckAuthResponse := authdto.CheckAuthResponse{
		ID:          channel.ID,
		Channelname: channel.Channelname,
		Email:       channel.Email,
		Photo:       channel.Photo,
		Description: channel.Description,
		Cover:       channel.Cover,
		Videos:      channel.Videos,
	}
	return c.JSON(http.StatusOK, dto.SuccessResult{Code: "success", Data: CheckAuthResponse})
}
