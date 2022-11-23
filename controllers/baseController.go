package controllers

import (
	"github.com/callummclu/emotion-tracker/configs"
	"github.com/gin-gonic/gin"
)

var Router *gin.Engine = gin.Default()

func BaseController() {
	AuthController()
	UserController()
	PostController()
	FeedController()

	Router.Run(configs.EnvPORT())
}