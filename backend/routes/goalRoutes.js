const express = require('express')
const router = express.Router()
const goalController = require('../Controller/goalController')
const { protect } = require('../Middleware/authMiddleware')


router
    .route('/')
    .get(protect,goalController.getGoals)
    .post(protect,goalController.CreateGoals)

router
    .route('/:id')
    .put(protect,goalController.updateGoals)
    .delete(protect,goalController.DeleteGoals)



module.exports=router