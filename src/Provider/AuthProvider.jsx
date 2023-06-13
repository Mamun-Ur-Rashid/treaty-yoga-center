import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    // create user email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in google
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // // github login
    // const gitHubLogin =() => {
    //     setLoading(true);
    //     return 
    // }
    // user profile update
    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    }
    // logOUt 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // auth observer 
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log("current User", currentUser);
            // jwt token token
           if(currentUser){
            axios.post('http://localhost:5000/jwt', {email: currentUser.email})
            .then(data => {
                // console.log(data.data.token);
                localStorage.setItem('access-token', data.data.token);
                setLoading(false);
            })
           }
           else{
            localStorage.removeItem('access-token');
           }
           setLoading(false);
          
        }) 
        return () => {
            return unsubscribe();
        }
    } , [])
    const authInfo = {
        user, loading, createUser, signIn, signInGoogle, logOut, updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;