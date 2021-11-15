import './index.css';

/**
 * Librerias
 */
import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';

/**
 * Componentes
 */
import InputLabel from '../../components/InputLabel';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Notification from '../../components/Notification';

/**
 * Images
 */
import logo from '../../images/logo.svg';

/**
 * Store
 */
import { login } from '../../store/actions/auth.action';
import { API_URI } from '../../config';

/**
 * Login Component Page
 * @param {*} props 
 * @returns 
 */
function Login(props){

    const {
        login
    } = props;

    /**
     * Navigation
     */
    const navigate = useNavigate();

    /**
     * States 
     */
    const [isNotificationVisible, setNotificationVisible] = useState(false);
    const [userField, setUserField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [loginStatus, setLoginStatus] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');
    const [isLoading, setLoading] = useState(false);

    /**
     * Actions
     */
    const handlerButtonLogin = async () =>{
        try{
            setLoading(true);
            const response = await axios.post(`${API_URI}/auth`, { userName: userField, userPassword: passwordField });
            login(response.data);
            setLoginStatus(true);
            setLoginMessage('Iniciando Sesion...');
            navigate('/post');
        }
        catch(err){
            if(err.response){
                const data =  err.response.data;
                setLoginStatus(!data.err);
                return setLoginMessage(data.errMsg);
            }
            
            setLoginStatus(false);
            console.log(err);
            setLoginMessage(err.message);
        }
        finally{
            setNotificationVisible(true);
            setLoading(false);
        }        
    }

    /**
     * JSX
     */
    return <div className='login-container'>
        <Card style={{ width: '70%', height: '400px'}}>
            <img src={logo} className='login-logo' alt='conexa-logo'/>
            <Title text={'Ingresar al examen practico'}/>
            <InputLabel label='Usuario:' onChange={(user)=>setUserField(user)}/>
            <InputLabel label='Clave:' onChange={(password)=>setPasswordField(password)} type='password'/>
            <Button title='Ingresar' style={{ width: '60%'}} onClick={handlerButtonLogin} isLoading={isLoading}/>
        </Card>
        <Notification isVisible={isNotificationVisible} onClose={()=>setNotificationVisible(false)}>
            <FontAwesomeIcon icon={ loginStatus ? faCheckCircle : faTimesCircle} color={ loginStatus ? 'green' : 'red'} size={'2x'} />
            <p>{loginMessage}</p>
        </Notification>
    </div>
}

/**
 * Dispatch from Store to Props
 * @param {*} dispatch 
 * @returns 
 */
const mapDispatchToProps =(dispatch) =>{
    return {
      login: (user)=> dispatch(login(user))
    }
  }

/**
 * States from Store to Props
 * @param {*} state 
 * @returns 
 */
  const mapStateToProps = (state)=>{
    return {
        
    }
  }

/**
 * Export Component Page
 */
export default connect(mapStateToProps,mapDispatchToProps)(Login);