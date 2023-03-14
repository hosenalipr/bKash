import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.in'
const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    if (user) {
        return children;
    }
    else {
        return <Navigate to="/longin" GoogleSignUp />
    }
}

export default RequireAuth
