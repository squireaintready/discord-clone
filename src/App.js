import React, {useEffect} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux'
import Chat from './Chat.js'
import { selectUser } from './features/userSlice'
import Login from './Login';
import {auth} from './firebase'
import {login, logout} from './features/userSlice'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser)
      if(authUser){
        dispatch(login({
          uid: authUser.uid,
          phot: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      }else{
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <div className="app">
      {user ?
        (
          <>
            <Sidebar />
            <Chat />
          </>
        )
        :
        (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
