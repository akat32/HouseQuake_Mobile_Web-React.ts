import React from 'react'

import './main.scss'

export const LoginPage: React.FC = () => {
    return (
        <div className = "mainPage">
            <div className = "backImg"></div>
            <div className = "backOpacity"></div>
            <div className = "innerBox">
                <h1 className = "title">HouseQuake</h1>
                <p>We make your home<br/>safe and lasting</p>
                <button>Sign up</button>
                <span>I have an account</span>
            </div>
        </div>
    )
}