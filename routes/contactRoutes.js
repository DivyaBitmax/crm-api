const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// CRUD routes for contacts
router.post('/', contactController.createContact);
router.get('/', contactController.getContacts);
router.get('/:id', contactController.getContactById);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

module.exports = router;
