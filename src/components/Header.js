import React from "react"

export default function Header() {
    return (
        <header className="header">
            <div className="header--div">
                <img 
                    src="https://img.icons8.com/doodle/96/000000/trollface.png" 
                    className="header--logo"
                />
                <h2 className="header--title">Meme Generator</h2>
            </div>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}