package controllers

import (
	"github.com/callummclu/emotion-tracker/configs"
	"github.com/gin-gonic/gin"
)

var Router *gin.Engine = gin.Default()

func BaseController() {


	Router.Run(configs.EnvPORT())
}