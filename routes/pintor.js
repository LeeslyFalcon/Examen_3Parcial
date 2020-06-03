 const express = require(`express`);
 //routeando a los pintores
 let pintor = require(`../controllers/pintoresController.js`);
 //rutas
 let router = express.Router();

 router.get(`/`, pintor.list);

 module.exports = router;