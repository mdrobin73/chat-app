import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';

const App = () => {

    const navigate = useNavigate();

    // Authentication state observer
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                navigate("/chat");
            } else{
                navigate("/");
            }
        })

        return () => {
            return unsubscribe();
        }
    } , [])

    return (
        <>
            <ToastContainer />

            <Routes>
                <Route path='/' element={<Login></Login>}></Route>

                <Route path='/chat' element={<Chat></Chat>}></Route>

                <Route path='/profile' element={<ProfileUpdate></ProfileUpdate>}></Route>
            </Routes>
        </>
    );
};

export default App;