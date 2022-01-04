const Student = require('../models/Student.js')
const StudentsRouter = require('express').Router()

StudentsRouter.get('/:id', (request, response, next) => {
  const id = request.params.id
  Student.findById(id).then((student) => {
    if (student) {
      response.json(student)
    } else {
      response.status(404).end()
    }
  }).catch(error => next(error))``
})

StudentsRouter.get('/info', (request, response) => {
  Student.find({}).then(students => {
    response.send(`<div>There are ${students.length} absent Students</div>
                <div>${new Date()}</div>`)
  })
})

StudentsRouter.get('/', (request, response, next) => {
  let date = new Date()
  date.setUTCHours(0, 0, 0, 0)

  let query
  query = { "_id": { $in: objectIds } }

  let cursor
  
  try {
      cursor = await ClassDAO.students.find(query)
  } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return []
  }

  try {
      const returnedStudents = await cursor.toArray()
      var absentStudentsList = []
      for (let studentIndex in returnedStudents) {
          absentStudentsList.push({
              key: returnedStudents[studentIndex].name,
              value: returnedStudents[studentIndex].image
          })
      }

      return absentStudentsList
  } catch (e) {
      console.error(
          `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return []
  }
})

StudentsRouter.post('/', (request, response, next) => {
  const body = request.body

  const Student = new Student({
    name: body.name,
    number: body.number,
  })
  Student.save().then(savedStudent => {
    response.json(savedStudent)
  }).catch(error => next(error))
})

module.exports = StudentsRouter
