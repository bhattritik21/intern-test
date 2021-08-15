import React from 'react'
import './Footer.css'
import { Users } from './Users'
import { BsFillBellFill,BsArrowRightShort,BsChatDotsFill ,BsChevronCompactDown,BsPersonFill} from "react-icons/bs";
import {MdCall } from "react-icons/md";

function Footer() {
    return (
        <div className="footer">
            <div className="profile">
                <div className="icon">
                < BsFillBellFill />
                </div>
                <h3>Ritik</h3>
                <img className="pimg" src="https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x"  />
                <div className="icon">
                <BsChevronCompactDown/>
                </div>              
            </div>
            <div className="search">
                <button className="add">+ Add</button>
                <input type="text" placeholder=" Search for applications here" />
            </div>
            <h3>Hello, Ritik Bhatt</h3>
            <h3>You have 8 new applicants today</h3>
            <img src="https://thumbs.dreamstime.com/z/text-document-editing-together-computer-vector-flat-cartoon-laptop-shared-file-collaborated-highlighted-editor-chat-163031749.jpg" className="foot-img" />
            <div className="newapp">
                <h2>New Applicants</h2>
                <div className="icon">
                <BsArrowRightShort/>
                </div>                
            </div>
            <div className="list">
                {Users.map((item, index) => {
                    return (
                        <div key={index} className="user">
                            <div className="icon">
                            <BsPersonFill/>
                            </div>                          
                            <div className="name">
                                <h3>{item.name}</h3>
                                <h5>Applicant <span>{item.title}</span> </h5>                              
                            </div>
                            <div className="sd">
                            <div className="icon"><BsChatDotsFill/></div>
                            <div className="icon"><MdCall/></div>   </div>     
                        </div>
                    );
                })}
            </div>

        </div>
    )
}

export default Footer
