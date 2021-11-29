import ClassDAO from "../models/classroomsDAO.js"

export default class ClassController {
    static module

    static apiSubscribeToClass(currentModule) {
      ClassController.module = currentModule
    }

    static async apiCreateNewAttendance(req, res, next) {
      let module = req.query.module
      return await ClassDAO.creatNewAttendance({module})
    }
      
    static async apiGetClassRoom(req, res, next) {
      let module = req.query.module
      const absentStudentIds  = await ClassDAO.getClassroom(module)
      const studentsInfo  = await ClassDAO.getStudents(absentStudentIds)
    
      let response = {
        absentStudents: studentsInfo,
      }
      return res.json(response)
    }
      
    static async apiUpdateClassAttendance(req, res, next) {
      let module = req.query.module
      let studentsList = req.query.arr
      
      const result  = await ClassDAO.updateClassAttendance(module, studentsList)
      return result
    }
}
