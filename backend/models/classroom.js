const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const classroomSchema = new mongoose.Schema({
  module: {
    type: String,
    minLength: 3,
    required: true,
    unique: true
  },
  attendance: {
    type: Array,
  },
  studentsEnrolled: {
    type: Array,
  },
},  { collection : 'classes' })
classroomSchema.plugin(uniqueValidator)

classroomSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Classroom = mongoose.model('Classroom', classroomSchema)

module.exports = Classroom