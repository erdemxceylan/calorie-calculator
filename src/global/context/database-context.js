import React, { useState, useEffect } from "react";

const DatabaseContext = React.createContext({
});

export function DatabaseContextProvider(props) {

    return (
        <DatabaseContext.Provider
            value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}
        >
            {props.children}
        </DatabaseContext.Provider>
    );
}

export default DatabaseContext;
