import{ useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthContextProvider';




const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    // console.log(loading);
    if (loading) {
        return (
            <div className='flex justify-center items-center'>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }
    if (user) {
        return children
    }
    // console.log('2', loading);
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;