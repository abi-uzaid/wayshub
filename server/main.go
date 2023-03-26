package main

import (
	"fmt"
	"os"
	"wayshub/database"
	"wayshub/pkg/postgres"
	"wayshub/routes"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {

	// env
	errEnv := godotenv.Load()
	if errEnv != nil {
		panic("Failed to load env file")
	}

	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.POST, echo.PATCH, echo.DELETE},
		AllowHeaders: []string{"X-Requested-With", "Content-Type", "Authorization"},
	}))

	// initial DB
	postgres.DatabaseInit()

	// run migration
	database.RunMigration()

	routes.RouteInit(e.Group("/api/v1"))

	//path file
	e.Static("/uploads/", "./uploads") // add this code

	var port = os.Getenv("PORT")

	fmt.Println("Server running localhost", port)
	// e.Logger.Fatal(e.Start(":" + port))
	e.Logger.Fatal(e.Start("localhost:5000"))
}
