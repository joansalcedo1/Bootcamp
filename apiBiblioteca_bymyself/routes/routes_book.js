const express = require("express")
const controller_Book = require("../controllers/controller_book")
const router = express.Router()

router.get("/",controller_Book.getAll)
router.get("/:id",controller_Book.getByID)
router.get("/titulo/:title", controller_Book.getByName)
router.get("/autor/:autor", controller_Book.getByAutorName)

router.post("/",controller_Book.createBook)
module.exports = router