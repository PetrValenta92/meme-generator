export default function Meme() {
    return (
        <main>
            <form className="form" action="" method="">
                <p>
                    <label className = "form-row" htmlFor="top">Top text</label>
                    <input className = "form-row" type="text" id="top" placeholder="Top text" />
                </p>
                <p>
                    <label className = "form-row" htmlFor="bottom">Bottom text</label>
                    <input className = "form-row" type="text" id="bottom" placeholder="Bottom text"/>
                </p>       
                <input className = "form-row--btn" type="submit" value="Get a new meme image 🖼️" />
            </form>
        </main>
    )
}
