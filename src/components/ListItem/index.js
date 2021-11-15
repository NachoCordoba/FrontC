import './index.css';

/**
 * Components
 */
import Label from '../Label';

/**
 * ListItem
 * Item de Lista
 * @param {*} props 
 * @returns 
 */
export default function ListItem(props){
    const {
        columns=[],
        data = {}
    } = props;

    return <div className='list-item'>
        {
            columns.map(
                (column, index) =><div className='field' key={index}>
                    <Label text={column.header}/>
                    {column.type ==='image' ? <img src={data[column.accessor]} alt={data[column.accessor]}/> :<p>{data[column.accessor]}</p>}
                </div>
            )
        }
    </div>
}