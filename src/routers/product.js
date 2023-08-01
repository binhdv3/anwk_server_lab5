const express = require('express')
const router = express.Router()
const productController = require('../controller/productController');

router.get("/", productController.get_list_product);
router.post("/create", productController.create)
router.delete("/delete/:id", productController.delete);
router.put("/edit/:id", productController.edit);
 
module.exports = router;
