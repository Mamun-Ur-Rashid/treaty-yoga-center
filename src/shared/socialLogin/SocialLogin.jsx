import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signInGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleSignIn = () => {
        signInGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log('social login', loggedInUser);
                const saveUser = { displayName: loggedInUser.displayName, email: loggedInUser.email, photoURL: loggedInUser.photoURL }
                console.log(saveUser);
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
    }
    return (
        <div>
            <div className='text-center space-y-4 mb-4'>
                <p>Or Sign Up With</p>
                <div className='flex justify-center items-start gap-4'>
                    <p><button onClick={googleSignIn} className="btn btn-circle btn-outline">
                        <FaGoogle></FaGoogle>
                    </button></p>
                    <p><button className="btn btn-circle btn-outline">
                        <FaGithub></FaGithub>
                    </button></p>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;