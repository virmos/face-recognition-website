import React from 'react'
const Intro = ({}) => {
    return (
        <div>
          <section className="hero d-flex flex-column justify-content-center align-items-center" id="hero">
            <div className="section-container">
                <div>
                    <div className="text-center">
                        <div className="text-light text-big">Face recog website</div>
                    </div>
                    <div className="type-writer">
                        <span className="break-word">Waiting for model loading. Please bear a minute!</span>
                    </div>
                </div>
            </div>
          </section>
        </div>
    )
}
export default Intro