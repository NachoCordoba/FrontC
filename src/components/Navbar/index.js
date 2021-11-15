import './index.css';

/**
 * Images
 */
import logo from '../../images/logo.svg';

/**
 * Librerias
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navbar
 * Barra de Navegacion
 * @param {*} props 
 * @returns 
 */
export default function Navbar(props){
    const {
        userName
    }=props;

    const [isMenuVisible, setMenuVisible] = useState(false);
    const location = useLocation();

    return <div> 
        <div className='navbar-container'>
                <img src={logo} alt='conexa-logo' />
                <FontAwesomeIcon icon={isMenuVisible? faTimes : faBars} color='#000' size={'2x'} onClick={()=>setMenuVisible(!isMenuVisible)}/>
        </div>
        <div className='menu-container' style={{ display: isMenuVisible ? 'block' : 'none'}}>
            <div className='menu-close'>
                <FontAwesomeIcon icon={faTimes} size={'1x'} onClick={()=>setMenuVisible(false)}/>
            </div>
            <div className='menu-user'>
                <FontAwesomeIcon icon={faUser} color='#0fb7d4' size={'2x'}/>
                <p>{userName}</p>
            </div>
            <div className='menu-links'>
                <Link to='/post' style={{ textDecoration: 'none'}}><p style={{ color: location.pathname==='/post' ? '#0fb7d4':'black' }}>Publicaciones</p></Link>
                <Link to='/photo' style={{ textDecoration: 'none'}} ><p style={{ color: location.pathname==='/photo' ? '#0fb7d4':'black' }}>Fotos</p></Link>
                <Link to='/' style={{ textDecoration: 'none'}} ><p style={{color: 'red'}}>Salir</p></Link>
            </div>
        </div>
    </div>
}