package controllers

import (
	"backend/config"
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Obtener todos los pagos
func GetPayments(c *gin.Context) {
	var payments []models.Payment
	if err := config.DB.Find(&payments).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al obtener pagos"})
		return
	}
	c.JSON(http.StatusOK, payments)
}

// Crear pago
func CreatePayment(c *gin.Context) {
	var payment models.Payment

	if err := c.ShouldBindJSON(&payment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Create(&payment).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al crear pago"})
		return
	}

	c.JSON(http.StatusOK, payment)
}

// Obtener pago por ID
func GetPaymentByID(c *gin.Context) {
	id := c.Param("id")
	var payment models.Payment

	if err := config.DB.First(&payment, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pago no encontrado"})
		return
	}

	c.JSON(http.StatusOK, payment)
}

// Actualizar pago
func UpdatePayment(c *gin.Context) {
	id := c.Param("id")
	var payment models.Payment

	if err := config.DB.First(&payment, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pago no encontrado"})
		return
	}

	if err := c.ShouldBindJSON(&payment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Save(&payment).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al actualizar pago"})
		return
	}

	c.JSON(http.StatusOK, payment)
}

// Eliminar pago
func DeletePayment(c *gin.Context) {
	id := c.Param("id")
	if err := config.DB.Delete(&models.Payment{}, id).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al eliminar pago"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Pago eliminado"})
}
