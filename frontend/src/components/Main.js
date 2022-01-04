import React from 'react'
import Students from './Students.js';
const Main = ({students}) => {
    return (
      <div>
        <main className="main" id="main">
            <section className="camera-container d-flex flex-column justify-content-center align-items-center" id="cameraContainer">
                <div className="camera d-flex flex-column justify-content-center align-items-center" id="camera">
                </div>
                <input className="image-upload" type="file" id="imageUpload" title=""/>
            </section>
            <Students students={students}/>
        </main>
      </div>
    )
}
export default Main