package tests

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"backend/config"
	"backend/models"
	"backend/routes"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

func setupRouter() *gin.Engine {
	config.LoadConfig()
	r := gin.Default()
	routes.SetupRoutes(r)
	return r
}

func TestRegisterLogin(t *testing.T) {
	r := setupRouter()

	// Test user registration
	user := models.User{
		Email:    "testuser@example.com",
		Password: "password123",
	}
	userJSON, _ := json.Marshal(user)

	req, _ := http.NewRequest("POST", "/register", bytes.NewBuffer(userJSON))
	req.Header.Set("Content-Type", "application/json")
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)

	// Test login
	loginPayload := map[string]string{
		"email":    "testuser@example.com",
		"password": "password123",
	}
	loginJSON, _ := json.Marshal(loginPayload)

	req, _ = http.NewRequest("POST", "/login", bytes.NewBuffer(loginJSON))
	req.Header.Set("Content-Type", "application/json")
	w = httptest.NewRecorder()
	r.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)

	var resp map[string]string
	json.Unmarshal(w.Body.Bytes(), &resp)
	token, exists := resp["token"]
	assert.True(t, exists)
	assert.NotEmpty(t, token)
}
