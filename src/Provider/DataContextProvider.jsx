import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
export const DataContext = createContext(null)
const DataContextProvider = ({children}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // fetch("https://raw.githubusercontent.com/mk-munna/Luxy-Realty-Api/main/TouristSpots.json")
        fetch("../../public/TouristSpots.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, [])
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

DataContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default DataContextProvider;