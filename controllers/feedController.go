package controllers

import (
	"github.com/callummclu/emotion-tracker/middleware"
	"github.com/callummclu/emotion-tracker/services"
)

func FeedController() {
	api := Router.Group("feed")
	{
		api.Use(middleware.CORSMiddleware("*"))

		api.GET("friends/:username", services.GetFriendsFeed)
	}
}