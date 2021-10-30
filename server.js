import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import dotenv from "dotenv"
import mongodb from "mongodb"
import ClassDAO from "./public/js/models/classrooms.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const viewsDir = path.join(__dirname, 'views')  
app.use(express.static(path.join(__dirname, './public/')))
app.get('/', (req, res) => res.sendFile(path.join(viewsDir, 'index.html')))

// connect to mongodb
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
    try { await ClassDAO.injectDB(client) } 
    catch (e) { console.error(e) }
    app.listen(port, () => console.log(`Listening on port ${port}!`))
})

export default app