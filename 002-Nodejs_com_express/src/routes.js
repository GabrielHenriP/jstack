const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.get('/contacts', ContactController.index);

router.get('/contacts/:id', ContactController.show);

router.delete('/contacts/:id', ContactController.delet);

router.post('/contacts', ContactController.store);

module.exports = router;
