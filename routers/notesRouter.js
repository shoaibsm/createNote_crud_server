const router = require('express').Router();
const notesController = require('../controllers/notes')

router.post('/createNote', notesController.createNote)
router.get('/getAllNotes', notesController.getAllNotes)
router.put('/update', notesController.updateNotes)
router.delete('/delete', notesController.deleteNote)

module.exports = router