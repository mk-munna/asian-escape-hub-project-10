import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
export const DataContext = createContext(null)
const DataContextProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/tourist-spots')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [])
    const dataInfo = {loading, data}
    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
};

DataContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default DataContextProvider;