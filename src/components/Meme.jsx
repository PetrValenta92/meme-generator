import data from "../memesData"
import React from "react";

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("");

    function getMeme() {
        const memeArray = data.data.memes;
        const memeIndex = Math.floor(Math.random() * memeArray.length) + 1;
        setMemeImage(memeArray[memeIndex].url);
    }

    return (
        <main>
            <div className="form" action="" method="">
                <p>
                    <label className = "form-row" htmlFor="top">Top text</label>
                    <input className = "form-row" type="text" id="top" placeholder="Top text" />
                </p>
                <p>
                    <label className = "form-row" htmlFor="bottom">Bottom text</label>
                    <input className = "form-row" type="text" id="bottom" placeholder="Bottom text"/>
                </p>       
                {/* <input className = "form-row--btn" type="submit" value="Get a new meme image 🖼️" /> */}
                <button className = "form-row--btn" onClick={ getMeme }>Get a new meme image 🖼️</button>
            </div>
            <img className="meme-image" src={ memeImage } alt="Image of randome meme" />
        </main>
    )
}
