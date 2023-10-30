import { useEffect, useState } from 'react';

import { useButtonContext } from '../../context/button.context';

const JokesService = ( {setJoke} ) => {
    const { setButtonClicked } = useButtonContext();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const apiUrl = 'https://icanhazdadjoke.com/';
        const fetchJoke = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(apiUrl, {
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                const data = await response.json(); 
                console.log(data)
                setJoke(data.joke) //set data to the joke context
                setButtonClicked(false) //set button to false so it can run the fetch api again
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false)
            }  
        }
        fetchJoke();
    }, [setButtonClicked, setJoke])

    return (
        <div>
            {/*isLoading ? <p>Joke Loading...</p> : null*/}
        </div>
    );
}

export default JokesService;