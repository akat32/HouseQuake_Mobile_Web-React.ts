import React, {useEffect, useState} from 'react'

import './signup.scss'


export const Signup: React.FC = () => {
    const [isCompany, setData] = useState()
    return (
        <div className = "signupPage">
            <TopBar/>
            <div className = "chkIsCompany">
                <div className = "circle1">
                    <div className = "people"></div>
                </div>
                <p>OR</p>
                <div className = "circle2">
                    <div className = "bulding">
                        <div className = "window1"></div>
                        <div className = "window2"></div>
                        <div className = "window3"></div>
                        <div className = "window4"></div>
                        <div className = "window5"></div>
                        <div className = "window6"></div>
                        <div className = "window7"></div>
                        <div className = "window8"></div>
                        <div className = "window9"></div>
                    </div>
                </div>
            </div>
            <p className = "wtext">I’m a client looking for a contractor</p>
            <input type = "email"/>
            <input type = "password"/>
            <div>
                <div></div>
            </div>
        </div>
    )
}

const TopBar: React.FC = () => {
    return (
        <div className = "signupTopBar">
            <div className = "leftArrow"></div>
            <p className = "topBarTitle">Sign Up</p>
            <div className = "rightDump"></div>
        </div>
    )
}