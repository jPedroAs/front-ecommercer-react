import './App.css'
import { IoFingerPrint } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";

function App() {


  return (
    <>
    <div className='container'>
      <div className='box left'>
              <h1 className='login'>Welcome</h1>
              <form>
                <div className='input-container'>
                  <IoFingerPrint className="input-icon" />
                  <input type="Text"  placeholder='RA/Email'/>
                </div>
                <div className='input-container'>
                  <GiPadlock className="input-icon"/>
                  <input type='Password' placeholder='Senha'/>
                </div>
                <button className='bnt-form'>Sign Ip</button>
              </form>
        </div>
        <div className='box right' >
            <h1 className='h1-right'>Hello, Friend!</h1>
            <p className='p-right'>Enter you personal details and start journey with us</p>
            <button className='bnt-singup'>Sign Up</button>
        </div>
     </div>
    </>
  )
}

export default App
