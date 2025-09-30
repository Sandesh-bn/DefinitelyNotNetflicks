import Logo from '../assets/logo.png';
import LoggedInIcon from '../assets/loggedin-profile.jpg';
import { auth } from '../utils/firebase_config';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

export function Header({ setShowSearchBar, showSearchBar }) {
    let navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    function handleSignout() {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }

    useEffect(() => {
        // whenever user signs in or signs up or logs out.
        let unsubsribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const { uid, email, displayName } = user;
                dispatch(addUser({
                    uid,
                    email,
                    displayName
                }))
                navigate('/browse')

                // ...
            } else {
                // User is signed out

                dispatch(removeUser())
                navigate('/')
            }
        });

        // unsusbribe from above function when component unmounts
        return () => unsubsribe();

    }, []);


    return (
        <div className='fixed px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
            <img onClick={()=>setShowSearchBar(false)} className='w-40' src={Logo} />
            {user && <div className="flex p-2">
                
                <button onClick={()=>setShowSearchBar(prev => !prev)} className='px-4 mx-4 text-white'>{showSearchBar? 'Home': '⌕ AI Search'}</button>
                <img className='w-10 h-10' src={LoggedInIcon} />
                <button onClick={handleSignout} className='p-2 font-bold text-white m-2'>Sign Out</button>
            </div>}
        </div>
    )
}