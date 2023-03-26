package videodto

type VideoRequest struct {
	Title       string `json:"title" form:"title" gorm:"type: varchar(255)"`
	Thumbnail   string `gorm:"type: varchar(255)" json:"thumbnail" form:"thumbnail"`
	Description string `gorm:"type: varchar(255)" json:"description" form:"description"`
	Video       string `gorm:"type: varchar(255)" json:"video" form:"video"`
}

type EditVideoRequest struct {
	Title       string `json:"title" form:"title" gorm:"type: varchar(255)"`
	Thumbnail   string `gorm:"type: varchar(255)" json:"thumbnail" form:"thumbnail"`
	Description string `gorm:"type: varchar(255)" json:"description" form:"description"`
	Video       string `gorm:"type: varchar(255)" json:"video" form:"video"`
}
