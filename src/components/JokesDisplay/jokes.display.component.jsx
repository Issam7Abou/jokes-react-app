import JokesService from "../JokesService/jokes.service.component";

import { useJokeContext } from "../../context/joke.context";
import { useButtonContext } from "../../context/button.context";

import './jokes.display.styles.css'

const JokesDisplay = () => {
    const { joke, setJoke } = useJokeContext();
    const { buttonClicked, setButtonClicked } = useButtonContext();

    const handleButtonClick = () => {
        console.log(buttonClicked)
        setButtonClicked(true);
        console.log(buttonClicked)
    }

    return (
        <div className="joke-container">
            {/* Checks if jokecontext has data if not then just renders a button for first search */}
            {joke ? (
                <div>
                    <h3 className="joke">{joke}</h3>
                    <h5 className="author">By Dad</h5>
                    <button className="button" onClick={handleButtonClick}>Next Joke</button>
                    {buttonClicked && <JokesService setJoke={setJoke} />}
                </div>
            ) : (
                <div>
                    <button className="button" onClick={handleButtonClick}>Search Joke</button>
                    {buttonClicked && <JokesService setJoke={setJoke} />}
                </div>
            )}
        </div>
    )
}

export default JokesDisplay;