const Classroom = require('../models/classroom.js')
const Student = require('../models/student.js')
const ClassroomsRouter = require('express').Router()

const ObjectId = require('mongodb').ObjectId

ClassroomsRouter.get('/', (request, response, next) => {
  const startOfDay = new Date()
  startOfDay.setUTCHours(0, 0, 0, 0)

  const classroomQuery = {
    'module': {
      $eq: 'cs231'
    },
    'attendance.studentsAttended': {
      '$elemMatch': {
        'status': {
          '$eq': false
        }
      }
    },
    'attendance': {
      '$elemMatch': {
        'created_at': {
          '$gte': startOfDay
          ,
        }
      }
    }
  }

  Classroom.find({ classroomQuery }).then(classrooms => {
    const classroom = classrooms[0]
    const attendance = classroom.attendance[0]
    const studentsList = attendance.studentsAttended
    let absentStudentsIds = []
    for (let studentIndex in studentsList) {
      absentStudentsIds.push(studentsList[studentIndex].id)
    }

    const studentQuery = { '_id': { $in: absentStudentsIds } }

    Student.find({ studentQuery }).then(students => {
      var absentStudentsList = []
      for (let studentIndex in students) {
        absentStudentsList.push({
          id: students[studentIndex].id,
          name: students[studentIndex].name,
          image: students[studentIndex].image,
        })
      }
      response.json(absentStudentsList)
    })
  }).catch(error => next(error))
})

ClassroomsRouter.post('/', (request, response, next) => {
  const startOfDay = new Date()
  startOfDay.setUTCHours(0, 0, 0, 0)
  const createNewQuery = { 'module': { $eq: 'cs231' } }
  let attendance
  let studentsEnrolled
  let classroomId

  Classroom.find({ createNewQuery }).then(classrooms => {
    attendance = classrooms[0].attendance
    studentsEnrolled = classrooms[0].studentsEnrolled
    classroomId = classrooms[0].id
  }).then(() => {
    return Classroom.find({
      'module': {
        $eq: 'cs231'
      },
      'attendance': {
        '$elemMatch': {
          'created_at': {
            '$gte': startOfDay,
          }
        }
      }
    })
  }).then(classrooms => {
    if (classrooms.length !== 0) {
      response.json(204).end()
    }

    let newStudentsAttended = []
    studentsEnrolled.forEach(id => {
      newStudentsAttended.push({
        id: id,
        status: false
      })
    })
    const newAttendance = {
      'created_at': startOfDay,
      'studentsAttended': newStudentsAttended,
    }
    return Classroom.findByIdAndUpdate(classroomId, { attendance: attendance.concat(newAttendance) }, { new: true })
  }).then(updatedAttendance => {
    response.json(updatedAttendance)
  }).catch(error => next(error))
})

ClassroomsRouter.put('/:id', (request, response, next) => {
  const id = request.params.id

  const startOfDay = new Date()
  startOfDay.setUTCHours(0, 0, 0, 0)

  ClassDAO = await conn.db(process.env.CLASS_NS).collection("classes")
  Classroom.updateOne(
    {
      'module': {
        $eq: module
      },
    },
    {
      $set: {
        // hardcoded because mongodb only allows 1 positional argument
        'attendance.0.studentsAttended.$[outer].status': true
      }
    },
    {
      'arrayFilters': [{
        'outer.id': {
          $in: [
            ObjectId(id)
          ]
        },
      }]
    })
    .then(updatedAttendance => {
      response.json(updatedAttendance)
    }).catch(error => next(error))
})

module.exports = ClassroomsRouter
