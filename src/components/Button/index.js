import './index.css';
/**
 * Librerias
 */
import ClipLoader from 'react-spinners/ClipLoader';

/**
 * Button Component
 * Boton
 * @param {*} props 
 * @returns 
 */
export default function Button(props){
    const {
        title = 'Button',
        style={},
        onClick = () => console.log('Button Clicked'),
        isLoading = false
    } = props;

    return <button 
        className='button' 
        style={style}
        onClick={onClick}
    >{ isLoading ? <ClipLoader color={'white'} loading={isLoading} /> : title}</button>
} 