import { useEffect } from 'react';

import { useButtonContext } from '../../context/button.context';

const JokesService = ( {setJoke} ) => {
    const { setButtonClicked } = useButtonContext();

    useEffect(() => {
        const apiUrl = 'https://icanhazdadjoke.com/';
        const fetchJoke = async () => {
            try {
                const response = await fetch(apiUrl, {
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                const data = await response.json(); 
                setJoke(data.joke) //set data to the joke context
                setButtonClicked(false) //set button to false so it can run the fetch api again
            } catch (error) {
                console.error(error);
            }
        }
        fetchJoke();
    }, [setButtonClicked, setJoke])

    return null;
}

export default JokesService;