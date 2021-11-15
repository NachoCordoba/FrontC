import './index.css';

/**
 * Input
 * Manejo de entrada de informacion
 * @param {*} props 
 * @returns 
 */
export default function Input(props){
    const {
        onChange = (text) => { console.log('Text Changed: ', text) },
        type = 'text',
        value,
        style
    } = props;


    return <input className='input' onChange={(e)=>{
        if(type === 'number')
            return onChange(e.target.valueAsNumber)
        return onChange(e.target.value)
    }} type={type} value={value} style={style}/>
} 