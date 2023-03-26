package channelsdto

type EditChannelRequest struct {
	Channelname string `json:"channelName" form:"channelName"`
	Photo       string `json:"photo" form:"photo"`
	Description string `json:"description" form:"description"`
	Cover       string `json:"cover" form:"cover"`
}
