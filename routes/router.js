const express =require('express');
const deliveryController= require("../controllers/DeliveryController")
const ordersController= require("../controllers/OrdersController")
const router=require('express').Router();


router.get("/",(req,res,next)=>{
    res.send("shahd")
})
router.get("/deliverymen",deliveryController.getallDelivery)
router.get("/order",ordersController.getallOrders)
module.exports=router;