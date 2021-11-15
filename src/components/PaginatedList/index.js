import './index.css';

/**
 * Componentes
 */
import List from '../List';
import Pagination from '../Pagination';

/**
 * Paginated List
 * Lista Paginada
 * @param {*} props 
 * @returns 
 */
export default function PaginatedList(props){
    const {
        page,
        onChangePage,
        columns,
        data = [],
        count,
        limit,
        onChangeLimit
    } = props;

    return <div className='paginated-list'>
        <List columns={columns} data={data}/>
        <div className='pagination'>
            <Pagination page={page} onChangePage={onChangePage} count={count} limit={limit} onChangeLimit={onChangeLimit}/>
        </div>
    </div>
}