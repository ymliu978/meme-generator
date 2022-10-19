import React from "react"
import memesData from "../memesData"

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImg() {
        //define data array
        const memesArray = memesData.data.memes
        //get random number that is a whole number and within array range
        const randomNum = Math.floor(Math.random()*memesArray.length)
        //useState
        setMemeImage(memesArray[randomNum].url)
    }


    return (
        <main className="meme--main--container">
            <form className="meme--form">
                <div className="meme--input--container">
                    <input className="meme--input" type="text" placeholder="top text field" />
                    <input className="meme--input" type="text" placeholder="bottom text field" />
                </div>
                <button onClick={getMemeImg} className="meme--button" type="button">Get a new meme image  🖼</button>
            </form>
            <img src={memeImage} className="meme-image"/>
        </main>
        
    )
}