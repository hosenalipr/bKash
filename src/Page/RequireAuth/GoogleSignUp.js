import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.in';

const GoogleSignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>You have registered successfully</p>
            </div>
        );
    }
    return (
        <div>
            <Button className='w-100' variant="success" onClick={() => signInWithGoogle()}>Google Sign Up</Button>
        </div>
    )
}

export default GoogleSignUp
