import { useContext } from "react";
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600 bg-[#e65b56] mx-auto container lg:my-28 my-14"></div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;