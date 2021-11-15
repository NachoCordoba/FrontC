import './index.css';

/**
 * Librerias
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

/**
 * Componentes
 */
import Input from '../Input';

/**
 * Pagination Component
 * Tableta de Control de la paginacion
 * @param {*} props 
 * @returns 
 */
export default function Pagination(props){
    const {
        page,
        count,
        limit,
        onChangePage,
        onChangeLimit
    } = props;

    const handlerPrevPage = () =>{
        onChangePage(page + 1);
    }

    const handlerNextPage = () =>{
        onChangePage(page + 1);
    }

    const handlerPageChange = (page) =>{
        onChangePage(page);
    }

    return <div className='pagination-container'>
        <FontAwesomeIcon icon={faArrowLeft} color='#0fb7d4' size={'2x'} onClick={handlerPrevPage}/>
        <div className='pagination-information'>
            <div>
                <Input onChange={handlerPageChange} type='number' value={page} style={{ width: '50px'}}/> 
                <span> /{ count / limit }</span>
            </div>
            <div>
                <span>
                    Mostrando de {limit} en <Input onChange={onChangeLimit} type='number' value={limit} style={{ width: '50px'}}/>
                </span>
            </div>
        </div>
        <FontAwesomeIcon icon={faArrowRight} color='#0fb7d4' size={'2x'} onClick={handlerNextPage}/>
    </div>
}