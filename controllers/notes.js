const { success, error } = require("../utils/responseWrapper")
const Notes = require('../models/Notes')

const createNote = async (req, res) => {

    try {
        const { title, content } = req.body;

        if (!title) {
            return res.send(error(400, 'Please enter the title'))
        }

        if (!content) {
            return res.send(error(400, 'Please enter the message'))
        }

        const newNote = new Notes({ title, content })
        const savedNote = await newNote.save();

        console.log(title, content);

        // return res.send(success(200, 'Notes created'))
        return res.send(success(200, { savedNote }))


    } catch (e) {
        return res.send(error(500, e.message))
    }

}

const getAllNotes = async (req, res) => {

    try {
        const notes = await Notes.find();

        if (!notes) {
            return res.send(error(404, 'First create the notes'))
        }

        return res.json(success(200, { notes }))

    } catch (e) {
        return res.send(error(500, e.message))
    }
}

const updateNotes = async (req, res) => {

    try {

        // const { _id } = req.params;

        const { _id, title, content } = req.body;

        if (!_id) {
            return res.send(error(404, "Id is required"))
        }

        const note = await Notes.findOne({ _id })

        if (!note) {
            return res.send(error(404, "Note not found"));
        }

        if (title) {
            note.title = title
        }

        if (content) {
            note.content = content
        }

        const updatedNote = await note.save()

        return res.send(success(200, { updatedNote }))

    } catch (e) {
        return res.send(error(500, e.message))
    }
}

const deleteNote = async (req, res) => {
    try {

        const { _id } = req.body;

        if (!_id) {
            return res.send(error(400, 'id is required'))
        }

        const note = await Notes.findOne({ _id })

        if (!note) {
            return res.send(error(404, 'Note not found'))
        }

        const deleteNote = await note.deleteOne({ _id })

        return res.send(success(200, { deleteNote }))


    } catch (e) {
        return res.send(error(500, e.message))
    }
}

module.exports = {
    createNote,
    getAllNotes,
    updateNotes,
    deleteNote
}