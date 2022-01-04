import React from 'react'
import Student from './Student';

const Students = ({students}) => {
  return (
    <div>
      <section className="resume" id="resume">
        <div className="container">
            <div className="section-title" id="resumeTitle">
                <h2>Absent students:</h2>
            </div>
            <div className="row" id="resumeRow">
              {students.map(student => <Student key={student.id} id={student.id} name={student.name} img={student.image}/>)}
            </div>
        </div>
      </section>
    </div>
    )
}
export default Students