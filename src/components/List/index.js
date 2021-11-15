import './index.css';

/**
 * Components
 */
import ListItem from '../ListItem';

/**
 * List
 * Lista a partir de informacion y columnas
 * @param {*} props 
 * @returns 
 */
export default function List(props){
    const {
        columns= [],
        data = []
    }= props;

    return <div className='list'>
        {
            data.map((item, index)=>
                <ListItem columns={columns} data={item} key={index}/>
            )
        }
    </div>
}