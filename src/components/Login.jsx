import { Header } from "./Header";
import LoginBackground from '../assets/login.jpeg';
import { useState } from "react";
import { useRef } from "react";
import { validate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../utils/firebase_config";


export function Login() {
    const [isSigninForm, setIsSignInForm] = useState(true);
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    function handleToggleForm() {
        setIsSignInForm(prev => !prev);
    }

    function handleClick(e) {
        e.preventDefault();
        const emailInput = (emailRef.current.value)
        const passwordInput = (passwordRef.current.value);
        const errorMessage = validate(emailInput, passwordInput, passwordInput);
        if (errorMessage) {
            console.log("EM");
            console.log(errorMessage)
            setErrorMessage("Error: " + errorMessage);
            return;
        }

        if (!isSigninForm) {
            createUserWithEmailAndPassword(auth, emailInput, passwordInput)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // ...
                    console.log("Success");
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMessage(errorMessage + " : " + errorCode)
                });
        }
        else {
            signInWithEmailAndPassword(auth, emailInput, passwordInput)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    console.log("Signed in Success");
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage + " : " + errorCode)
                });
        }

    }

    return (
        <div>
            <Header />
            
            <div className="absolute w-full">
                <img className="w-full h-screen object-cover" src={LoginBackground} />
            </div>
            <form className="absolute w-3/12 p-12 bg-black/70 my-36 mx-auto right-0 left-0 text-white rounded-lg">
                <h1 className="font-bold text-3xl py-4">
                    {isSigninForm ? "Sign In" : "Sign Up"}
                </h1>
                <input ref={emailRef} type="text" placeholder="Email" className="p-2 my-2 w-full bg-gray-700" />
                {!isSigninForm && <input ref={nameRef} type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-700" />}
                <input ref={passwordRef} type="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-700" />
                {errorMessage && <p className="text-lg font-bold text-red-500">{errorMessage}</p>}
                <button onClick={handleClick} className="p-4 my-6 bg-red-700 w-full rounded-lg">
                    {isSigninForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={handleToggleForm}>
                    {isSigninForm ? "New to Rentflicks? Sign up Now" : "Already Registered? Sign In Now"}
                </p>
            </form>
        </div>
    )
}