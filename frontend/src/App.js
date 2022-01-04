import React, { useState, useEffect } from 'react'

import './App.css';
import Sidebar from './components/Sidebar.js'
import Intro from './components/Intro.js'
import Main from './components/Main.js'
import studentServices from './components/ServerServices.js'
import services from './components/FrontendServices.js'

const App = () => {
  const [students, setStudents] = useState([])
  const [module, setModule] = useState('')

  useEffect(() => {
    getAllStudents()
    services.loadModels()
  }, [])

  const getAllStudents = () => {
    studentServices
    .getAll()              
    .then(data => {
      setStudents(data)
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    setModule(event.target['classId'].value)
  }
  return (
    <div>
      <Sidebar handleOnSubmit={handleOnSubmit}/>
      <Intro />
      <Main students={students}/>
    </div>
  )
}

export default App;
