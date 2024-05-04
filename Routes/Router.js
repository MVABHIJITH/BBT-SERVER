const express = require('express')
const userController = require('../Controllers/UserControllers')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const CarController = require('../Controllers/CarControllers')
const multerConfig = require('../Middleware/multerMiddleware')
const testdriveController = require('../Controllers/TestdriveControllers')

const router = new express.Router()

// register
router.post('/register', userController.register)

// login
router.post('/login', userController.login)

// add car
router.post('/add-cars', jwtMiddleware, multerConfig.array('carImage', 3), CarController.addCar)

// get all car
router.get('/all-cars', jwtMiddleware, CarController.getAllcar)

// remove car
router.delete('/remove-car/:pid', jwtMiddleware, CarController.removeCar)

// add testdrive
router.post('/add-testdrive', jwtMiddleware, testdriveController.addTestdrive)

// get User testdrive
router.get('/user-testdrive', jwtMiddleware, testdriveController.getUserTesdrive)

// get bookcars
router.get('/book-cars', jwtMiddleware, CarController.getBookCars)

// remove project
router.delete('/remove-testdrive/:pid', jwtMiddleware, testdriveController.removeTesDrive)

// get admin testdrive
router.get('/admin-testdrive', jwtMiddleware, testdriveController.getAdminTestdrive)

module.exports = router
