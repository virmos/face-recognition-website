import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import ClassController from './public/js/controllers/classroomsController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/put', ClassController.apiCreateNewAttendance)
app.use('/get', ClassController.apiGetClassRoom)
app.use('/update', ClassController.apiUpdateClassAttendance)

const viewsDir = path.join(__dirname, 'views')  
app.use(express.static(path.join(__dirname, './public/')))
app.get('/', (req, res) => res.sendFile(path.join(viewsDir, 'index.html')))

export default app