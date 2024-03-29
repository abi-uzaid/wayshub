package models

import "time"

type Video struct {
	ID          int       `json:"id" gorm:"primary_key:auto_increment"`
	Title       string    `json:"title" gorm:"type: varchar(255)"`
	Thumbnail   string    `gorm:"type: varchar(255)" json:"thumbnail"`
	Description string    `gorm:"type: varchar(255)" json:"description"`
	Video       string    `gorm:"type: varchar(255)" json:"video"`
	ChannelID   int       `json:"channel_id"`
	CreatedAt   time.Time `json:"created_at"`

	ViewCount int `json:"viewcount" form:"viewcount" gorm:"type: int"`

	Channel Channel `gorm:"foreignKey:ChannelID" json:"channel"` // the associated Channel struct
}

type VideoResponse struct {
	ID          int       `json:"id"`
	Title       string    `json:"title" gorm:"type: varchar(255)"`
	Thumbnail   string    `gorm:"type: varchar(255)" json:"thumbnail"`
	Description string    `json:"description"`
	ViewCount   int       `json:"viewcount" form:"viewcount" gorm:"type: int"`
	Channel     []Channel `json:"-"`

	Channelname string `json:"channelName"`
	Photo       string `json:"photo"`
	Cover       string `json:"cover"`
}

func (VideoResponse) TableName() string {
	return "videos"
}
