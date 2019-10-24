const mongoose = require('mongoose')

const AddContactSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  ph: Number,
})
mongoose.model('Contacts',AddContactSchema)
