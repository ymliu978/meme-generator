import React from "react"

export default function Meme() {
    return (
        <form className="meme--form">
            <div className="meme--input--container">
                <input className="meme--input" type="text" placeholder="top text field" />
                <input className="meme--input" type="text" placeholder="bottom text field" />
            </div>
            <button className="meme--button" type="button">Get a new meme image  🖼</button>
        </form>
    )
}