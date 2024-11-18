
import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    // Register a new User
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    // Login user
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Login with Google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        createNewUser,
        userLogin,
        loginWithGoogle,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;