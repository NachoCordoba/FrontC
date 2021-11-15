import './index.css';

/**
 * Card Component
 * 
 * @param {*} props 
 * @returns 
 */
export default function Card(props){
    const {
        children,
        style = {
            width: '300px',
            height: '300px'
        }
    } = props;

    return <div className='card-container' style={style}>
        { children }
    </div>
}