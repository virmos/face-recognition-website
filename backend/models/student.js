const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
    unique: true
  },
  image: {
    type: String
  },
},  { collection : 'students' })
studentSchema.plugin(uniqueValidator)

studentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student