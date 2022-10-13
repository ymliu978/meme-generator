import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="https://img.icons8.com/doodle/96/000000/trollface.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}