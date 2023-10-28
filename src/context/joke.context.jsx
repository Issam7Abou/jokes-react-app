import React, { createContext, useContext, useState } from "react";

const JokeContext = createContext();

export const useJokeContext = () => {
    return useContext(JokeContext);
}

export const JokeProvider = ({ children }) => {
    const [joke, setJoke] = useState(null);

    return (
        <JokeContext.Provider value={{joke, setJoke}}>
            {children}
        </JokeContext.Provider>
    );
}