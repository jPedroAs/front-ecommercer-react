import './index.css'
import { IoFingerPrint, IoPersonOutline } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import api from "../../services/api"
import { useState, useRef  } from "react";
// import ModalConfirm from '../../components/ModalCadastro/ModalConfirm';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const inputName = useRef<HTMLInputElement>(null);
  const inputRa = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputSenha = useRef<HTMLInputElement>(null);


  const inputLoginRa = useRef<HTMLInputElement>(null);
  const inputLoginSenha = useRef<HTMLInputElement>(null);

  async function ReqLogin(event: React.FormEvent) {
    event.preventDefault();
      const body = {
        Ra: inputLoginRa.current?.value,
        Senha:inputLoginSenha.current?.value
      }
      try{
      const response = await api.post("/Login", body)
      console.log(response.status)
      if(response.status == 200){
        const data = response.data
        console.log(data)
        localStorage.setItem("token", data.token);
        navigate("/home")
      }
    }catch (error) {
      console.log(error)
      Swal.fire({
        text: "Ocorreu um erro ao Fazer o Login.",
        icon: "error",
      });
    }
  }


  async function createUser(event: React.FormEvent) {
    event.preventDefault(); 
    try {
      const body = {
        Username: inputName.current?.value,
        Email: inputEmail.current?.value,
        Password: inputSenha.current?.value,
        // rA: inputRa.current?.value
      };
      console.log(body)

      const response = await api.post("api/register", body);
      console.log(response.status)
      console.log(response.data)

      if(response.status == 200){
        Swal.fire({
          text: "Seu cadastro foi concluído com sucesso.",
          icon: "success",
        });

        if (inputName.current) inputName.current.value = "";
        if (inputRa.current) inputRa.current.value = "";
        if (inputEmail.current) inputEmail.current.value = "";
        if (inputSenha.current) inputSenha.current.value = "";
      }
      else{
        Swal.fire({
          text: "Usuário já registrado.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        text: "Ocorreu um erro ao cadastrar o usuário.",
        icon: "error",
      });
    }
  }


  const [isSignUp, setIsSignUp] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  // const handleSignUp = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   setIsModalOpen(true);
  // };

  return (
    <>
      <div className={`container ${isSignUp ? "right-painel-active" : ""}`}>
        <div className='signin'>
          <h1 >Bem Vindo</h1>
          <form onSubmit={ReqLogin}>
            <div className='input-container'>
              <IoFingerPrint className="input-icon" />
              <input type="Text" placeholder='RA/Email' ref={inputLoginRa} />
            </div>
            <div className='input-container'>
              <GiPadlock className="input-icon" />
              <input type='Password' placeholder='Senha' ref={inputLoginSenha} />
            </div>
            <a href="*">Esqueci minha senha</a>
            <button className='bnt-form' onClick={ReqLogin}>Sign In</button>
          </form>
        </div>


        <div className='signup'>
          <h1 className='cad'>Sign Up</h1>
          <form onSubmit={createUser}>
            <div className='input-container'>
              <IoPersonOutline className="input-icon" />
              <input type="Text" placeholder='Nome' ref={inputName} />
            </div>
            <div className='input-container'>
              <IoFingerPrint className="input-icon" />
              <input type="Text" placeholder='RA' ref={inputRa} />
            </div>
            <div className='input-container'>
              <MdAlternateEmail className="input-icon" />
              <input type="Text" placeholder='E-mail' ref={inputEmail} />
            </div>
            <div className='input-container'>
              <GiPadlock className="input-icon" />
              <input type='Password' placeholder='Senha' ref={inputSenha} />
            </div>
            <button className='bnt-form' onClick={createUser}>Sign Up</button>
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