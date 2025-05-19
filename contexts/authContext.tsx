import { createContext, useContext } from "react";
import { AuthContextType, UserType } from "../types";
import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { firestore } from "../config/firebase";


const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [user, setUser] = useState<UserType | null>(null);

    const login = async(email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return {success: true}
        } catch (error) {
            return {success: false}
        }
    }

    const register = async(email: string, password: string, name: string) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(firestore, "users", response?.user?.uid), {
                name: name,
                email: email,
                uid: response?.user?.uid,
                
            })
            return {success: true}
        } catch (error) {
            return {success: false}
        }
    }

    const getUserState = async(uid: string) => {
        try {
            const docSnap = await getDoc(doc(firestore, "users", uid));
            if(docSnap.exists()) {
                const data = docSnap.data();
                const userData: UserType = {
                    uid: data?.uid,
                    email: data.email || null,
                    name: data.name || null,
                    image: data.image || null
                }
                setUser({...userData});
                
            }
        } catch (error) {
            console.log(error);
            
        }
    }


    const contextValue: AuthContextType = {
        user,
        setUser,
        login,
        register,
        getUserState
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be used within an AuthContextProvider");
    }
    return context;
}