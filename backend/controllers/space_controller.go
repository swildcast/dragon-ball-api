package controllers

import (
	"backend/config"
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Obtener todos los espacios
func GetSpaces(c *gin.Context) {
	var spaces []models.Space
	if err := config.DB.Find(&spaces).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al obtener espacios"})
		return
	}
	c.JSON(http.StatusOK, spaces)
}

// Crear espacio
func CreateSpace(c *gin.Context) {
	var space models.Space

	if err := c.ShouldBindJSON(&space); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Create(&space).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al crear espacio"})
		return
	}

	c.JSON(http.StatusOK, space)
}

// Obtener espacio por ID
func GetSpaceByID(c *gin.Context) {
	id := c.Param("id")
	var space models.Space

	if err := config.DB.First(&space, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Espacio no encontrado"})
		return
	}

	c.JSON(http.StatusOK, space)
}

// Actualizar espacio
func UpdateSpace(c *gin.Context) {
	id := c.Param("id")
	var space models.Space

	if err := config.DB.First(&space, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Espacio no encontrado"})
		return
	}

	if err := c.ShouldBindJSON(&space); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Save(&space).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al actualizar espacio"})
		return
	}

	c.JSON(http.StatusOK, space)
}

// Eliminar espacio
func DeleteSpace(c *gin.Context) {
	id := c.Param("id")
	if err := config.DB.Delete(&models.Space{}, id).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al eliminar espacio"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Espacio eliminado"})
}
