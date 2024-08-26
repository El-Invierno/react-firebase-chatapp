import React, { useState } from 'react'
import { toast } from 'react-toastify';
import './login.css'

const Login = () => {

  const [avatar,setAvatar] = useState({
    file:null,
    url:""
  });

  const handleAvatar = (e) => {

    if(e.target.files[0])
    {
        setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
  }

  return (
    <div className="login">
        <div className="item">
            <h2>Welcome!</h2>
            <form action="" onSubmit={handleLogin}>
                <input type="text" name="email" placeholder='Email'/>
                <input type="text" name="password" placeholder='Password'/>
                <button>Sign In</button>
            </form>
        </div>
        <div className="seperator"></div>
        <div className="item">
            <h2>Create an Account</h2>
            <form action="">
                <label htmlFor="file">
                    <img src={avatar.url ? avatar.url : "/avatar.png"} alt="" />
                    Click to Upload
                </label>
                <input type="file" id='file' style={{display:'none'}} onChange={handleAvatar}/>
                <input type="text" name="username" placeholder='Username'/>   
                <input type="text" name="email" placeholder='Email'/>
                <input type="text" name="password" placeholder='Password'/>
                <button>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Login