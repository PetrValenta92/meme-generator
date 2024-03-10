import trollFace from "../images/trollFace.svg"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src= { trollFace } alt="Meme troll face image" />
                <h1>Meme Generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </nav>
    )
}