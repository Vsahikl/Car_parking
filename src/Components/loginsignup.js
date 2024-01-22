 import React, { useState } from 'react';
 import "./loginsignup.css"
 import user_icon from './Assests/person.png';
 import email_icon from './Assests/email.png';
 import password_icon from './Assests/password.png';

 
 const Loginsignup = () => {
    const[action,setaction]=useState("Signup")
   return (
     <div className='container'>
        <div className='header'>
            <div className='text' style={{alignItems:'center'}}>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={user_icon} alt=''/>
                <input type='text' placeholder='Name'/>
            </div>
            <div className='input'>
                <img src={email_icon} alt=''/>
                <input type='email' placeholder='Email'/>
            </div>
            <div className='input'>
                <img src={password_icon}  alt=''/>
                <input type='password' placeholder='Password'/>
            </div>

        </div>
        <div className='forgot-password'>Lost-password? <span>Click here</span></div>
        <div className='submit-container'>
            <div className={action==="Login" ? "submit gray" :"submit"} onClick={()=>{setaction("Signup")}}> Sign up</div>
            <div className={action==="signup" ? "submit gray":"submit"} onClick={()=>{setaction("Signup")}}> Login</div>
        </div>

       
     </div>
   )
 }
 
 export default Loginsignup
 