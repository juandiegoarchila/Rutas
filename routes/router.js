const express = require('express');
const { VistaPrincipal,VistaTable,VistaNotificacion,Vistainicio} = require('../controller/PageControllers');

const router = express.Router();

router.get('/', VistaPrincipal);
router.get('/table', VistaTable);
router.get('/notificacion', VistaNotificacion);
router.get('/inicio', Vistainicio);





module.exports = router;
