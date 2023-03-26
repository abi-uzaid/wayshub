package middleware

import (
	"io"
	"io/ioutil"
	"net/http"
	"path/filepath"
	"strings"

	"github.com/labstack/echo/v4"
)

func UploadVideo(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		// Upload file
		// FormFile returns the first file for the given key `myFile`
		// it also returns the FileHeader so we can get the Filename,
		// the Header and the size of the file
		file, err := c.FormFile("video")

		if err != nil {
			// fmt.Println(err)
			return c.JSON(http.StatusBadRequest, err)
		}

		src, err := file.Open()
		if err != nil {
			return c.JSON(http.StatusBadRequest, err)
		}
		defer src.Close()
		// fmt.Printf("Uploaded File: %+v\n", handler.Filename)
		// fmt.Printf("File Size: %+v\n", handler.Size)
		// fmt.Printf("MIME Header: %+v\n", handler.Header)

		// const MAX_UPLOAD_SIZE = 5 * 1024 * 1024 // 5MB

		// // Parse our multipart form, 5 * 1024 * 1024 specifies a maximum
		// // upload of 5 MB files.
		// r := c.Request()
		// w := c.Response().Writer

		// r.ParseMultipartForm(MAX_UPLOAD_SIZE)
		// if r.ContentLength > MAX_UPLOAD_SIZE {
		// 	w.WriteHeader(http.StatusBadRequest)
		// 	response := Result{Code: http.StatusBadRequest, Message: "Max size is 5mb"}
		// 	return c.JSON(http.StatusBadRequest, response)
		// }

		// Create a temporary file within our temp-images directory that follows
		// a particular naming pattern

		ext := strings.ToLower(filepath.Ext(file.Filename))
		if ext != ".mp4" && ext != ".avi" && ext != ".mkv" {
			return c.JSON(http.StatusBadRequest, "Ebueeseeeettt dah itu bukan Video neng")
		}

		filename := "video-*" + ext

		tempFile, err := ioutil.TempFile("uploads/videos", filename)
		if err != nil {
			// fmt.Println(err)
			// fmt.Println("path upload error")
			return c.JSON(http.StatusBadRequest, err)
		}
		defer tempFile.Close()

		// read all of the contents of our uploaded file into a
		// byte array

		// fileBytes, err := ioutil.ReadAll(file)

		if _, err = io.Copy(tempFile, src); err != nil {
			return c.JSON(http.StatusBadRequest, err)
		}

		// write this byte array to our temporary file

		// tempFile.Write(fileBytes)

		data := tempFile.Name()
		// filevideo := data[15:] // split uploads/

		c.Set("dataVideo", data)
		return next(c)
	}
}
