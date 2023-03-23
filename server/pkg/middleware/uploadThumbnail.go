package middleware

import (
	"io/ioutil"
	"net/http"
	"path/filepath"
	"strings"

	"github.com/labstack/echo/v4"
)

func UploadThumbnail(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		// Upload file
		// FormFile returns the first file for the given key `myFile`
		// it also returns the FileHeader so we can get the Filename,
		// the Header and the size of the file
		file, err := c.FormFile("thumbnail")

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

		// const MAX_UPLOAD_SIZE = 20 << 20 // 10MB

		// Parse our multipart form, 10 << 20 specifies a maximum
		// upload of 10 MB files.

		// r.ParseMultipartForm(MAX_UPLOAD_SIZE)
		// if r.ContentLength > MAX_UPLOAD_SIZE {
		// 	w.WriteHeader(http.StatusBadRequest)
		// 	response := Result{Code: http.StatusBadRequest, Message: "Max size in 1mb"}
		// 	json.NewEncoder(w).Encode(response)
		// 	return
		// }

		// Create a temporary file within our temp-images directory that follows
		// a particular naming pattern

		ext := strings.ToLower(filepath.Ext(file.Filename))
		if ext != ".png" && ext != ".jpg" && ext != ".jpeg" {
			return c.JSON(http.StatusBadRequest, "Ebueeseeeettt dah itu bukan FOTO neng")
		}
		tempFile, err := ioutil.TempFile("uploads/thumbnails", "thumbnail-*.png")
		if err != nil {
			// fmt.Println(err)
			// fmt.Println("path upload error")
			return c.JSON(http.StatusBadRequest, err)
		}
		defer tempFile.Close()

		// read all of the contents of our uploaded file into a
		// byte array

		// fileBytes, err := ioutil.ReadAll(file)

		if err != nil {
			// fmt.Println(err)
		}

		// write this byte array to our temporary file

		// tempFile.Write(fileBytes)

		data := tempFile.Name()
		filethumbnail := data[19:] // split uploads/

		c.Set("dataThumbnail", filethumbnail)
		return next(c)
	}
}
