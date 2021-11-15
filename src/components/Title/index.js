
import './index.css';
/**
 * Title Component
 * Utilizado como Titulos entre secciones
 * @param {*} props 
 * @returns 
 */
export default function Title(props){
    const {
        text = 'Title'
    } = props;

    return <p className='title'>
        { text }
    </p>
}