import { Button } from '@material-ui/core'
import React from 'react'
import {auth, provider} from './firebase'
import './Login.css'

function Login() {
    const signIn = () => {
        //do clever google log in shizz....
        auth.signInWithPopup(provider)
        .catch(e => alert(e.message))
    }

    return (
        <div className='login'>
            <div className="login__logo">
                <img src='https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png'
                alt=''
                />    
            </div>  
            <Button onClick={signIn}>Sign In</Button>          
        </div>
    )
}

export default Login
