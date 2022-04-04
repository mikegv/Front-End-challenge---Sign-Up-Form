import './SignUpArea.css'

import React from 'react';

const SignUpArea = () => {
    return (

        <div className='signUpArea'>
            <pre className='purpleBanner'><b>Try it free 7 days</b> then $20/mo. thereafter</pre>
            <form>
                <input type='text' placeholder='Jonathan' />
                <input type='text' placeholder='Last Name' />
                <input type='text' placeholder='Email Address' />                
                <input type='text' placeholder='Password' />

                <button>Claim your free trial</button>

                <p className='tos'>By clicking the button, you are agreeing to our <span className="redText">Terms and Services</span></p>
            </form>
        </div>
    );
};

export default SignUpArea;