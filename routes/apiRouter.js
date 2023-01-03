const express = require("express");
const router = express.Router();

const ApisController = require("../controllers/apis.controller.js");
const apisController = new ApisController();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post(
  "/order/request",
  upload.single("photo"),
  apisController.requestOrder
);

module.exports = router;
