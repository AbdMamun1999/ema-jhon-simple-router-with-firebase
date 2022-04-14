import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUP.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate()


    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event =>{
        setEmail(event.target.value)
       
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }

    const handleConfirmPassword = event =>{
        setConfirmPassword(event.target.value)
    }

    if(user){
        navigate('/')
    }

    const handleSubmit = event =>{
        event.preventDefault()
        if(password !== confirmPassword){
            setError('Password didn\'t match')
            return;
        }
        createUserWithEmailAndPassword(email,password)
    }

    console.log(user)

    return (
        <div className='form-container'>
        <div>
            <h2 className='font-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPassword} type="password" name="password" id="" required/>
                </div>
                {
                    <p style={{color:'red'}}>{error}</p>
                }
                <input className='form-submit' type="submit" value="Sign Up" />
            </form>
            <p>
                Already Have an account? <Link  className='form-link' to='/login'>Login</Link>
            </p>
        </div>
    </div>
    );
};

export default SignUp;