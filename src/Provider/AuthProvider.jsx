import { useEffect, useState } from "react";
import { createContext } from "react";

import { 
  createUserWithEmailAndPassword,
   getAuth,GoogleAuthProvider,onAuthStateChanged,
    signInWithEmailAndPassword,
     signInWithPopup,
     signOut,
      updateProfile 
    } from "firebase/auth";
import app from "../../firebase/firebase.config";


export const AuthContext = createContext()
const auth= getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createNewUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin =(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
   
    const updateUserProfile=(updateData)=>{
         return updateProfile(auth.currentUser, updateData)
        
    }

    const signInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider);
    };

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser=>{
              setUser(currentUser)
              setLoading(false)
          })
          return() =>{
              unsubscribe();
          }
      },[])
  
    const authInfo ={
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        signInWithGoogle,
        loading,
        updateUserProfile,
    }


    return <AuthContext.Provider value ={authInfo}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;