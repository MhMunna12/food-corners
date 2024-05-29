/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

import React, { createContext, useEffect, useState } from 'react';
import { app } from './../firebase/firebase.config';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const logOut = () => {
        return signOut(auth).then(() => setUser(null));
    };

    useEffect(() => {
        const unscubcribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                console.log('currentUser', currentUser);
            } else {
                setLoading(false);
            }
        });
        return () => {
            return unscubcribe();
        };
    }, [auth]);

    const authInfo = { user, googleLogin, loading, logOut, createUser, signInUser }
    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;