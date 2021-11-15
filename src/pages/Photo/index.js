import './index.css';

/**
 * Librerias
 */
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Componentes
 */
import Navbar from '../../components/Navbar';
import PaginatedList from '../../components/PaginatedList';
import Title from '../../components/Title';
import { API_URI } from '../../config';

/**
 * Photo Component Page
 * @param {*} props 
 * @returns 
 */
function Photo(props){
    const {
        auth
    } = props;

    /**
     * States 
     */
    const [paginatedData, setPaginatedData] = useState([]);
    const [paginatedCount, setPaginatedCount] = useState(0);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);

    /**
     * Data Persisted
     */
    const getPaginatedData = async (page, limit, auth) =>{
        const response = await axios.get(`${API_URI}/photo?page=${page}&limit=${limit}`, { headers: { authorization: auth.jwt}});
        setPaginatedData(response.data.data);
        setPaginatedCount(response.data.count);
    }

    useEffect(()=>{
        getPaginatedData(page, limit, auth);
    },[auth, page, limit]);


    /**
     * Actions
     */
    const handlerPage = (page) => {
        if(page < 0 || isNaN(page))
            return setPage(0);

        return setPage(page);
    };
    
    const handlerLimit = (limit) => setLimit(limit);


    /**
     * JSX
     */
    return <div>
        <Navbar userName={auth.user.userName}/>
        <div className='photo-list-container'>
            <div className='photo-list'>
                <Title text='Fotos Paginadas'/>
                <PaginatedList 
                    page={page} 
                    limit={limit} 
                    count={paginatedCount}
                    columns={[
                        { header: 'Album:', accessor: 'albumId' },
                        { header: 'Titulo:', accessor: 'title' },
                        { header: 'Imagen:', accessor: 'thumbnailUrl', type:'image' },
                    ]} 
                    data={paginatedData} 
                    onChangePage={handlerPage} 
                    onChangeLimit={handlerLimit} 
                />
            </div>
        </div>
        
    </div>
}

/**
 * Dispatch from Store to Props
 * @param {*} dispatch 
 * @returns 
 */
const mapDispatchToProps =(dispatch) =>{
    return {
    }
  }

/**
 * States from Store to Props
 * @param {*} state 
 * @returns 
 */
  const mapStateToProps = (state)=>{
    return {
        auth: state.auth
    }
  }

/**
 * Export Component Page
 */
export default connect(mapStateToProps,mapDispatchToProps)(Photo);