import React from 'react';
import './SignUpArea.css'
import SignUpForm from '../signUpForm/SignUpForm'

const SignUpArea = () => {
    return (

        <div className='signUpArea'>
            <pre className='purpleBanner'><b>Try it free 7 days</b> then $20/mo. thereafter</pre>
            <SignUpForm />
        </div>
    );
};

export default SignUpArea;