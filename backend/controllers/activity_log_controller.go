package controllers

import (
	"backend/config"
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// CreateActivityLog registra una nueva entrada en el log de actividad
func CreateActivityLog(userID uint, action string, description string) error {
	log := models.ActivityLog{
		UserID:      userID,
		Action:      action,
		Description: description,
	}

	if err := config.DB.Create(&log).Error; err != nil {
		return err
	}
	return nil
}

// Obtener logs de actividad (opcional)
func GetActivityLogs(c *gin.Context) {
	var logs []models.ActivityLog
	if err := config.DB.Find(&logs).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al obtener logs"})
		return
	}
	c.JSON(http.StatusOK, logs)
}
