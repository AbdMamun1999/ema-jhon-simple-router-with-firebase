import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [address,setAddress] = useState('')
    const [Phone,setPhone] = useState('')
    const [error,setError] = useState('')
    // const navigate = useNavigate()

    const handleNameBlur = event =>{
        setEmail(event.target.value)
       
    }
    const handleEmailBlur = event =>{
        setEmail(event.target.value)
       
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value)
    }

    const handlePhoneNumberBlur = event =>{
        setPhone(event.target.value)
    }

    const handleSubmit = event =>{
        event.preventDefault()
        const shipping = {name, email, address, Phone}
        console.log(shipping)
    }
    console.log(user)
    return (
        <div className='form-container'>
        <div>
            <h2 className='font-title'>Shipping Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Your Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddressBlur} type="text" name="address" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input onBlur={handlePhoneNumberBlur} type="text" name="phone" id="" required/>
                </div>
                {
                    <p style={{color:'red'}}>{error}</p>
                }
                <input className='form-submit' type="submit" value="Add Shipping" />
            </form>
        </div>
    </div>
    );
};

export default Shipment;