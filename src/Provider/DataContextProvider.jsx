import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
export const DataContext = createContext(null)
const DataContextProvider = ({ children }) => {
    const themeFromLocalStorage = localStorage.getItem("theme")
    const [theme, setTheme] = useState(themeFromLocalStorage);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reloadAfterDelete, setReloadAfterDelete] = useState(false);
    useEffect(() => {
        fetch('https://asian-escape-server-7wg5vnwib-mk-monnas-projects.vercel.app/tourist-spots')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [reloadAfterDelete])
    useEffect(() => {
        if (theme) {
            // save theme to local storage
            localStorage.setItem("theme", "true");
            document.querySelector("html").setAttribute("data-theme", "dark");
        } else {
            localStorage.removeItem("theme");
            document.querySelector("html").setAttribute("data-theme", "light");
        }
    }, [theme])
    const dataInfo = { loading, data, theme, setTheme, setReloadAfterDelete }
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