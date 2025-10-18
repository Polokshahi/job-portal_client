import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../Firebase/Firebase.int';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from 'axios';


const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState();
    const [Loading, setLoading] = useState(true);


    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {

        const unsubScribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            

            if(currentUser?.email){
                const user = {email: currentUser.email};
                axios.post('http://localhost:5000/jwt', user,{
                    withCredentials: true
                })
                .then((res) =>{
                    console.log("login token", res.data);
                    setLoading(false);
                })
            }else{

                axios.post('http://localhost:5000/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log("logout", res.data)
                    setLoading(false);
                
                });



            }





            console.log('current user', currentUser);

        })

        return () => {
            unsubScribe();
        }


    }, [])


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }





    const LogOut = () => {
        return signOut(auth);
    }
















    const authInfo = {

        user,
        Loading,
        createUser,
        signIn,
        LogOut,
        googleSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;