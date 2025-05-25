package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	// Public routes
	router.POST("/register", controllers.Register)
	router.POST("/login", controllers.Login)

	// Public spaces route (no auth)
	router.GET("/public/spaces", controllers.GetSpaces)

	// Protected routes
	protected := router.Group("/")
	protected.Use(controllers.AuthMiddleware())
	{
		// User routes
		protected.GET("/users", controllers.GetUsers)
		protected.GET("/users/:id", controllers.GetUserByID)
		protected.POST("/users", controllers.CreateUser)
		protected.PUT("/users/:id", controllers.UpdateUser)
		protected.DELETE("/users/:id", controllers.DeleteUser)

		// Add other protected routes here (spaces, bookings, payments, etc.)
		// Space routes
		protected.GET("/spaces", controllers.GetSpaces)
		protected.GET("/spaces/:id", controllers.GetSpaceByID)
		protected.POST("/spaces", controllers.CreateSpace)
		protected.PUT("/spaces/:id", controllers.UpdateSpace)
		protected.DELETE("/spaces/:id", controllers.DeleteSpace)

		// Booking routes
		protected.GET("/bookings", controllers.GetBookings)
		protected.GET("/bookings/:id", controllers.GetBookingByID)
		protected.POST("/bookings", controllers.CreateBooking)
		protected.PUT("/bookings/:id", controllers.UpdateBooking)
		protected.DELETE("/bookings/:id", controllers.DeleteBooking)

		// Payment routes
		protected.GET("/payments", controllers.GetPayments)
		protected.GET("/payments/:id", controllers.GetPaymentByID)
		protected.POST("/payments", controllers.CreatePayment)
		protected.PUT("/payments/:id", controllers.UpdatePayment)
		protected.DELETE("/payments/:id", controllers.DeletePayment)
	}
}
