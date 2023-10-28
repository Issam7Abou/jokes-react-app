import React, { createContext, useContext, useState } from "react";

const ButtonContext = createContext();

export const useButtonContext = () => {
    return useContext(ButtonContext);
}

export const ButtonProvider = ({ children }) => {
    const [buttonClicked, setButtonClicked] = useState(false);

    return (
        <ButtonContext.Provider value={{buttonClicked, setButtonClicked}}>
            {children}
        </ButtonContext.Provider>
    );
}