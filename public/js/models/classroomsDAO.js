import mongodb from "mongodb"

export default class ClassDAO {
    static classrooms
    static students

    static async injectDB(conn) {
        if (ClassDAO.classrooms) {
            return
        }
        try {
            ClassDAO.classrooms = await conn.db(process.env.CLASS_NS).collection("classes")
            ClassDAO.students = await conn.db(process.env.CLASS_NS).collection("students")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in classroomDAO: ${e}`,
            )
        }
    }

    static async creatNewAttendance(module) {
        ClassDAO.classrooms.insertOne(
            { module: module },
            {
              $push: {
                'attendance': {"created_at": "today"}      
              }
            }
        )
        return true
    }

    static async getClassroom(module) {
        let date = new Date()
        date.setUTCHours(0, 0, 0, 0)

        let query
        query = { 
            "module": {
                $eq: module
              },
            "attendance.studentsAttended": {
                "$elemMatch": {
                    "status": {
                    "$eq": false
                    }
                }
            },
            // "attendance": {
            //     "$elemMatch": {
            //       "created_at": {
            //         "$gte": date
            //       }
            //     }
            // }
        }

        let cursor
        
        try {
            cursor = await ClassDAO.classrooms.find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return [] 
        }

        try {
            const returnedClassrooms = await cursor.toArray()
            const classroom = returnedClassrooms[0]
            const attendance = classroom.attendance[0]
            const studentsList = attendance.studentsAttended
            let absentStudentIds = []
            
            for (let studentIndex in studentsList) {
                absentStudentIds.push(studentsList[studentIndex].id)
            }
            return absentStudentIds
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`,
            )
            return [] 
        }
    }

    static async getStudents(objectIds) {
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
    }

    static async updateClassAttendance(module, studentsList) {
        let cursor
        var ObjectId = mongodb.ObjectId;

        try {
            cursor = await ClassDAO.classrooms.updateOne(
                {
                    "module": {
                        $eq: module
                    },
                }, 
                {
                    $set: {
                        "attendance.$[].studentsAttended.$[outer].status": true
                    }
                },
                {
                    "arrayFilters": [{
                        "outer.id": {
                            $in: [
                                ObjectId("617bf02afd2f40aecfe87211")
                            ]
                        }
                    }]
              })
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return false
        }
        return true
    }   
}



