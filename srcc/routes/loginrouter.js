const usecontroler= require("../controler/usecontroler");
const express = require('express');
const router = express.Router();
router.get('/login', usecontroler.getLoginForm);