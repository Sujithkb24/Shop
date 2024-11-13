import React,{useState} from "react";
import '/public/loginStyle.css'
import { useNavigate } from 'react-router-dom';
function Login(){
    const[action,setAction]=useState("SignUp");
    const[isOtp, setOtp]=useState(false);
    const navigate = useNavigate();

  const handleClick = () => {
    if(action=="Login")
        setOtp(true)

    if(isOtp == true)
        navigate("/Homepage")
    
    if(!isOtp)
    setOtp(true)// This navigates to NewPage when the button is clicked
  };


    
    return(
        
        <div className="main1">
            <video  autoPlay loop muted playsInline className="back-video">
                <source src="/87789-602074264_small.mp4" type="video/mp4"></source>
            </video>
        <div className="Container">
            <div className="Header">
                <div className="text">{action}</div>
                <div className="underLine"></div>
            </div>
            <form method="post" action="#">
            <div className="radioInput">
            <label>
    <input type="radio" name="role" value="admin"/>
      Admin
    </label>
    <label>
        <input type="radio" name="role" value="employee"/>
          Employee
    </label>

    </div>




            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
                    <input type="text" placeholder="Name" name="name"/>
                </div>}
                
                <div className="input">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
                    <input type="email" placeholder="Email" name="email"/>
                </div>
                {action==="Login"?null: <div className="input">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
                    <input type="Phone" placeholder="Phone" name="phone"/>
                </div>}
               {action==="Login"?null: <div className="input">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-dash" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
                <input type="shopID" placeholder="Shop ID" name="shopID"/>

               </div>}
                <div className="input">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
</svg>
                    <input type="password" placeholder="Password" name="password"/>
                </div>
            </div>
            
            
            {isOtp && action=="SignUp"?
            <div className="Otp">
                <form method="post"action="Sendotp">
                    <p>OTP has been sent to the registed Email ID.</p>
                    <input type="text" name="otp" placeholder="Enter 4 digit OTP"></input>

                
                </form>

            </div>
            
            :<div className="Submitcontainer">
                <div className={action=="Login"? "submit gray":"submit notGray"}onClick={() =>{
                    setAction("SignUp")
                    
                }}>Signup</div>
                <div className={action==="SignUp"?"submit gray":"submit notGray"} onClick={() =>{
                    setAction("Login")
                }}>Login</div>
            </div>}
            
           <div className="formSubmit">
            <button type="button" className="btnSubmit" onClick={handleClick}>{isOtp && action=="SignUp"?"Submit OTP":"Submit"}</button>
           </div>
           </form>
        </div>
        
        </div>
        
    )
}

export default Login