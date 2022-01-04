import React from 'react'
import Form from './Form.js'

const Sidebar = ({handleOnSubmit}) => {
    return (
        <div> 
          <header className="" id="header">
            <div className="d-flex flex-column" id="menu">
                <nav className="nav-menu" id="nav-menu">
                    <ul>
                        <li><a className="d-flex" href="#hero">
                                <i className="bi bi-house-door"></i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li><a className="d-flex" href="#camera">
                                <i className="bi bi-camera"></i>
                                <span>Camera</span>
                            </a>
                        </li>
                        <li><a className="d-flex" href="#resume">
                                <i className="bi bi-person"></i>
                                <span>Database</span>
                            </a>
                        </li>
                        <li>
                            <Form onSubmit={handleOnSubmit}/>
                        </li>
                    </ul>
                </nav>
            </div>
          </header>
        </div>
    )
}
export default Sidebar