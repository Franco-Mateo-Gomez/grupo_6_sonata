const express = require('express');
const router = express.Router();
const apiUsersController = require("../../controllers/apis/users")

router.get("/",apiUsersController.loadUsers);
router.get("/:id",apiUsersController.loadUser);

module.exports = router;