import ClassDAO from "../models/classrooms.js"

export default class ClassController {
    static apiSubscribeToClass(module) {
        ClassDAO.setFilter(module)
    }
      
    static async apiGetClassAttendance() {
        let filters = {}
        filters.module = module
      
        const { studentsList, totalNumStudents } = await ClassDAO.getStudents({
          filters,
        })
      
        let response = {
          absentStudents: studentsList,
          filters: filters,
          total_results: totalNumStudents,
        }
        res.json(response)
    }
      
    static async apiUpdateClassAttendance() {
        let filters = {}
        filters.module = module
      
        const { studentsList, totalNumStudents } = await ClassDAO.getStudents({
          filters,
        })
      
        let response = {
          absentStudents: studentsList,
          filters: filters,
          total_results: totalNumStudents,
        }
        res.json(response)
    }

    static async apiCreateNewAttendance() {
        let filters = {}
        filters.module = module
      
        const { studentsList, totalNumStudents } = await ClassDAO.getStudents({
          filters,
        })
      
        let response = {
          absentStudents: studentsList,
          filters: filters,
          total_results: totalNumStudents,
        }
        res.json(response)
    }
}
