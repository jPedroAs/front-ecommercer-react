import './index.css'
import { IoFingerPrint,IoPersonOutline } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
// import api from "../../services/api"
import { useState } from "react";

function Login(){

  // async function ReqLogin() {
  //     const response = await api.post("/singin")

  //     const data = response.data.json()
  //     localStorage.setItem("token", data.token);
  // }

  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

      return (
        <>
          <div className={`container ${isSignUp ? "right-painel-active" : ""}`}>
          <div className='signin'>
                  <h1 >Bem Vindo</h1>
                  <form>
                    <div className='input-container'>
                      <IoFingerPrint className="input-icon" />
                      <input type="Text"  placeholder='RA/Email'/>
                    </div>
                    <div className='input-container'>
                      <GiPadlock className="input-icon"/>
                      <input type='Password' placeholder='Senha'/>
                    </div>
                    <button className='bnt-form'>Sign In</button>
                  </form>
            </div>
            <div className='signup'>
                  <h1 className='cad'>Sign Up</h1>
                  <form>
                  <div className='input-container'>
                      <IoPersonOutline className="input-icon" />
                      <input type="Text"  placeholder='Nome'/>
                    </div>
                    <div className='input-container'>
                      <IoFingerPrint className="input-icon" />
                      <input type="Text"  placeholder='RA'/>
                    </div>
                    <div className='input-container'>
                      <MdAlternateEmail className="input-icon" />
                      <input type="Text"  placeholder='E-mail'/>
                    </div>
                    <div className='input-container'>
                      <GiPadlock className="input-icon"/>
                      <input type='Password' placeholder='Senha'/>
                    </div>
                    <button className='bnt-form'>Sign Up</button>
                  </form>
            </div>
            <div className='overlay-conatainer'>
              <div className='overlay'>
                <div className='overlay-right' >
                    <h1 className='h1-right'>Hello, Friend!</h1>
                    <p className='p-right'>Enter you personal details and start journey with us</p>
                    <button className='bnt-singup' onClick={toggleForm}>Sign Up</button>
                </div>
                <div className='overlay-left' >
                    <h1 className='h1-right'>Hello, Friend!</h1>
                    <p className='p-right'>Enter you personal details and start journey with us</p>
                    <button className='bnt-singin' onClick={toggleForm}>Sign In</button>
                </div>
              </div>
           </div>
         </div>
        </>
      )
}

export default Login