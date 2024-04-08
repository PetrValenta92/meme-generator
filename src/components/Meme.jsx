import data from "../memesData"
import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomeImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [newMemeImages, setNewMemeImages] = React.useState(data);

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function getMeme(event) {
        event.preventDefault();

        const memeArray = newMemeImages.data.memes;
        const memeIndex = Math.floor(Math.random() * memeArray.length) + 1;

        setMeme(prevData => {
            return {
                ...prevData,
                randomeImage: memeArray[memeIndex].url
            }
        });
    }

    return (
        <main>
            <div className="form" action="" method="">
                <p>
                    <label className = "form-row" htmlFor="top">Top text</label>
                    <input
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText} 
                        className = "form-row" 
                        type="text" 
                        id="top" 
                        placeholder="Top text" 
                    />
                </p>
                <p>
                    <label className = "form-row" htmlFor="bottom">Bottom text</label>
                    <input
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText} 
                        className = "form-row" 
                        type="text" 
                        id="bottom" 
                        placeholder="Bottom text"
                    />
                </p>       
                <button className = "form-row--btn" onClick={ getMeme }>Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img className="meme__image" src={ meme.randomeImage } alt="Image of randome meme" />
                <h2 className="meme__text top">{ meme.topText }</h2>
                <h2 className="meme__text bottom">{ meme.bottomText }</h2>
            </div>
        </main>
    )
}
