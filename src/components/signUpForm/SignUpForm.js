import React from 'react';
import './SignUpForm.css'
import { useState } from 'react';

const SignUpForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLasttName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLasttNameError] = useState(false)
    const [emailAddressError, setEmailAddressError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
        if(e.target.value){
            setFirstNameError(false)
        }
    }
    const lastNameHandler = (e) => {
        setLasttName(e.target.value)
        if(e.target.value){
            setLasttNameError(false)
        }
    }
    const emailAddressHandler = (e) => {
        setEmailAddress(e.target.value)
        if(e.target.value){
            setEmailAddressError(false)
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value){
            setPasswordError(false)
        }
    }
    const submitHandler = (event) => {
        event.preventDefault()

        if(!firstName){
         setFirstNameError(true)   
        }
        if(!lastName){
            setLasttNameError(true)
        }
        if(!emailAddress || !emailAddress.includes('@')){
            setEmailAddressError(true)
        }
        if(!password){
            setPasswordError(true)
        }
        if(!firstName || !lastName || !emailAddress || !emailAddress.includes('@') || !password){
            console.log('hello')
            return
        }else{
        console.log({firstName, lastName, emailAddress})
        setFirstName('')
        setLasttName('')
        setEmailAddress('')
        setPassword('')
        setFirstNameError(false)
        setLasttNameError(false)
        setEmailAddressError(false)
        setPasswordError(false)
        }
    }

    
    let showFirstNameError = firstNameError ? 'hasError' : ''
    let showLastNameError = lastNameError ? 'hasError' : ''
    let showEmailError = emailAddressError ? 'hasError' : ''
    let showPasswordError = passwordError ? 'hasError' : ''
  
    return (
        <form onSubmit={submitHandler}>
                <input type='text' placeholder='Jonathan' value={firstName} onChange={firstNameHandler} className={showFirstNameError} />
                <input type='text' placeholder='Last Name' value={lastName} onChange={lastNameHandler} className={showLastNameError} />
                <input type='text' placeholder='Email Address' value={emailAddress} onChange={emailAddressHandler} className={showEmailError} />                
                <input type='text' placeholder='Password' value={password} onChange={passwordHandler} className={showPasswordError} />

                <button type='submit'>Claim your free trial</button>

                <p className='tos'>By clicking the button, you are agreeing to our <span className="redText">Terms and Services</span></p>
            </form>
    );
};

export default SignUpForm;