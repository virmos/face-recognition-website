import dotenv from "dotenv"
import mongodb from "mongodb"
import ClassDAO from "./public/js/models/classroomsDAO.js"
import app from './app.js';

dotenv.config()
const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000

MongoClient.connect(
process.env.CLASS_DB_URI,
{
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    try { 
        console.log("connected to mongodb!")
        await ClassDAO.injectDB(client)
    } 
    catch (e) { console.error(e) }
    app.listen(port, () => console.log(`Listening on port ${port}!`))
})