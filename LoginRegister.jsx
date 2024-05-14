import React,{ useEffect, useRef, useState } from "react";
import './LoginRegister.css';
import Home from "../Home";
function LoginRegister (){
    const username=useRef()
    const lastname=useRef()
    const email=useRef()
    const number=useRef()
    const password=useRef()
    const [showHome,setSohwHome]=useState(false)
    const [show,setSohw]=useState(false)
    const localsignup=localStorage.getItem("login")
    const localEmail=localStorage.getItem("emial")
    useEffect(()=>{
        if(localsignup){
            setSohwHome(true)
            if(localEmail){
                setSohw(true)
            }

        }
    })
    const handleClick=()=>{
        if(username.current.value&&lastname.current.value&&email.current.value&&number.current.value&&password.current.value)
        {
            localStorage.setItem("username",username.current.value)
            localStorage.setItem("lastname",lastname.current.value)
            localStorage.setItem("email",email.current.value)
            localStorage.setItem("number",number.current.value)
            localStorage.setItem("password",password.current.value)
            localStorage.setItem("login",email.current.value)
            alert("Account Created Successfully!!")
            window.location.reload()
        }    
    }
    return(
        <div>
             {showHome?<Home/>:
             
                <div className={`Wrapper`}>
           
                    <div className="from-box login">
                
                        <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text"
                                placeholder="Username" ref={username} required />
                        <input type="text"
                        placeholder="Lastname" ref={lastname} required />
                         <input type="Email"
                        placeholder="Email" ref={email} required  />
                         <input type="text"
                        placeholder="Number" ref={number} required />
                        </div>
                        <div className="input-box">
                        <input type="Password"placeholder="Password" ref={password} required   />
                    </div>
                    <br/>
                    <div className="remember-forgot">
                        <label ><input type="Checkbox" />Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div>
                    <button onClick={handleClick} type="submit">login</button>
                    
                    </div>
                    </form>
                        
                  </div>   
                  </div>
                
            
}
        </div>
    );

};

 

export default LoginRegister;
