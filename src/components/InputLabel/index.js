import './index.css';

/**
 * Components
 */
import Label from '../Label';
import Input from '../Input';

/**
 * InputLabel
 * Input con Etiqueta
 * @param {*} props 
 * @returns 
 */
export default function InputLabel(props){
    const {
        label,
        labelDirection = 'column',
        onChange,
        type
    } = props;

    return <div className='input-label-container' style={{flexDirection: labelDirection }}>
        <Label text={label} />
        <Input onChange={onChange} type={type}/>
    </div>
}