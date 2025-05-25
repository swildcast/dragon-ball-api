package controllers

import (
	"backend/config"
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Obtener todas las reservas
func GetBookings(c *gin.Context) {
	var bookings []models.Booking
	if err := config.DB.Find(&bookings).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al obtener reservas"})
		return
	}
	c.JSON(http.StatusOK, bookings)
}

// Crear reserva
func CreateBooking(c *gin.Context) {
	var booking models.Booking

	if err := c.ShouldBindJSON(&booking); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Create(&booking).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al crear reserva"})
		return
	}

	c.JSON(http.StatusOK, booking)
}

// Obtener reserva por ID
func GetBookingByID(c *gin.Context) {
	id := c.Param("id")
	var booking models.Booking

	if err := config.DB.First(&booking, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Reserva no encontrada"})
		return
	}

	c.JSON(http.StatusOK, booking)
}

// Actualizar reserva
func UpdateBooking(c *gin.Context) {
	id := c.Param("id")
	var booking models.Booking

	if err := config.DB.First(&booking, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Reserva no encontrada"})
		return
	}

	if err := c.ShouldBindJSON(&booking); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Save(&booking).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al actualizar reserva"})
		return
	}

	c.JSON(http.StatusOK, booking)
}

// Eliminar reserva
func DeleteBooking(c *gin.Context) {
	id := c.Param("id")
	if err := config.DB.Delete(&models.Booking{}, id).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al eliminar reserva"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Reserva eliminada"})
}
