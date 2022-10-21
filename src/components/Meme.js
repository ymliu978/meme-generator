import React from "react"
import memesData from "../memesData"

export default function Meme() {

    // create an object with 3 properties in State
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    // create a variable in State that default to memesData.js
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        // define data array
        const memesArray = allMemeImages.data.memes
        // get random number that is a whole number and within array range
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // get random url of image
        const url = memesArray[randomNumber].url
        // update/replace one of the properties in state while others reamin the same
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


    return (
        <main className="meme--main--container">
            <form className="meme--form">
                <div className="meme--input--container">
                    <input className="meme--input" type="text" placeholder="top text field" />
                    <input className="meme--input" type="text" placeholder="bottom text field" />
                </div>
                <button onClick={getMemeImage} className="meme--button" type="button">Get a new meme image  🖼</button>
            </form>
            <img src={meme.randomImage} className="meme--image"/>
        </main>
        
    )
}