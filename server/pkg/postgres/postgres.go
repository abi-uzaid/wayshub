package postgres

import (
	"fmt"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func DatabaseInit() {
	// var DB_HOST = "localhost"
	// var DB_USER = "postgres"
	// var DB_PASSWORD = "akasakaryuu14"
	// var DB_NAME = "wayshub"
	// var DB_PORT = "5432"

	var DB_HOST = os.Getenv("DB_HOST")
	var DB_USER = os.Getenv("DB_USER")
	var DB_PASSWORD = os.Getenv("DB_PASSWORD")
	var DB_NAME = os.Getenv("DB_NAME")
	var DB_PORT = os.Getenv("DB_PORT")

	var err error
	DBurl := fmt.Sprintf("host=%s user=%s password=%s dbname=%s sslmode=disable port=%s", DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT)
	DB, err = gorm.Open(postgres.Open(DBurl), &gorm.Config{})

	if err != nil {
		panic(err)
	}

	fmt.Println("Connected to Database")
}
