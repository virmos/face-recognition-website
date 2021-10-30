let classrooms
let filter

export default class ClassDAO {
    static setFilter(currentFilter) {
        filter = currentFilter
        alert(filter)
    }

    static async injectDB(conn) {
        if (classrooms) {
        return
        }
        try {
            classrooms = await conn.db(process.env.CLASS_NS).collection("class")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in classroomDAO: ${e}`,
            )
        }
    }

    static async getClass() {
        let query
        query = { "module": { $eq: filter } }

        let cursor
        
        try {
        cursor = await classrooms.find(query)
        } catch (e) {
        console.error(`Unable to issue find command, ${e}`)
        return { studentsList: [], totalNumStudents: 0 }
        }

        try {
        const studentsList = await cursor.toArray()
        const totalNumStudents = await classrooms.countDocuments(query)

        return { studentsList, totalNumStudents }
        } catch (e) {
        console.error(
            `Unable to convert cursor to array or problem counting documents, ${e}`,
        )
        return { studentsList: [], totalNumStudents: 0 }
        }
    }
}



