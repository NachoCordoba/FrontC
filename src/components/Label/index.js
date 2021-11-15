import './index.css';

/**
 * Label
 * Etiquetado
 * @param {*} props 
 * @returns 
 */
export default function Label(props){
    const {
        text = 'Label'
    } = props;

    return <span className='label'>
        {text}
    </span>
}