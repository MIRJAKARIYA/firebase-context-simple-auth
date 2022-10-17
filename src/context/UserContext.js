import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'



export const AuthContext = createContext();

 
const auth = getAuth(app)


const UserContext = ({children}) => {
    
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
   
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    //why are we doing this
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            console.log('auth state changed', currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])

    const authInfo = {user, createUser, loginUser,signInWithGoogle, logOut, loading}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;