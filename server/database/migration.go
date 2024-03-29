package database

import (
	"fmt"
	"wayshub/models"
	"wayshub/pkg/postgres"
)

// Automatic Migration if Running App
func RunMigration() {
	err := postgres.DB.AutoMigrate(
		&models.Channel{},
		&models.Video{},
		&models.Comment{},
		&models.Subscription{},
	)

	if err != nil {
		fmt.Println(err)
		panic("Migration Failed")
	}

	fmt.Println("Migration Success")
}
