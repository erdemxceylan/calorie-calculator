import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DatabaseContext = React.createContext({
    nutrients: [],
    dailyTargetValues: {}
});

export function DatabaseContextProvider(props) {
    const [nutrients, setNutrients] = useState([]);
    const [dailyTargetValues, setDailyTargetValues] = useState({});

    useEffect(async () => {
        await axios.get('http://localhost:8080/nutrients')
            .then(response => setNutrients(response.data))
            .catch(error => console.log(error));

        await axios.get('http://localhost:8080/settings')
            .then(response => setDailyTargetValues(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <DatabaseContext.Provider value={{ nutrients, dailyTargetValues }}>
            {props.children}
        </DatabaseContext.Provider>
    );
}

export default DatabaseContext;
