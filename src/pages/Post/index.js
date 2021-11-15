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
import List from '../../components/List';
import { Table } from '../../components/Table';
import { API_URI } from '../../config';

/**
 * Post Component Page
 * @param {*} props 
 * @returns 
 */
function Post(props){
    const {
        auth
    } = props;

    /**
     * States 
     */
    const [listData, setListData] = useState([]);
    const [paginatedData, setPaginatedData] = useState([]);
    const [paginatedCount, setPaginatedCount] = useState(0);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(2);

    /**
     * Data Persisted
     */
    const getPaginatedData = async (page, limit, auth) =>{
        const response = await axios.get(`${API_URI}/paginatedPost?page=${page}&limit=${limit}`, { headers: { authorization: auth.jwt}});
        setPaginatedData(response.data.data);
        setPaginatedCount(response.data.count);
    }

    const getListData = async (auth) =>{
        const response = await axios.get(`${API_URI}/post`, { headers: { authorization: auth.jwt}});
        setListData(response.data);
    }

    useEffect(()=>{
        getListData(auth);
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
        <div className='post-list-container'>
            <div className='post-list'>
                <Title text='Publicaciones Paginadas'/>
                <PaginatedList 
                    page={page} 
                    limit={limit} 
                    count={paginatedCount}
                    columns={[
                        { header: 'Usuario:', accessor: 'userId' },
                        { header: 'Titulo:', accessor: 'title' },
                        { header: 'Publicado:', accessor: 'body' },
                    ]} 
                    data={paginatedData} 
                    onChangePage={handlerPage} 
                    onChangeLimit={handlerLimit} 
                />
                <Title text='Publicaciones en Tabla Sin Paginar'/>
                <Table 
                    columns={[
                        { header: 'Usuario:', accessor: 'userId' },
                        { header: 'Titulo:', accessor: 'title' },
                        { header: 'Publicado:', accessor: 'body' },
                    ]}
                    data={listData} 
                />
                <Title text='Publicaciones Sin Paginar'/>
                <List
                    columns={[
                        { header: 'Usuario:', accessor: 'userId' },
                        { header: 'Titulo:', accessor: 'title' },
                        { header: 'Publicado:', accessor: 'body' },
                    ]} 
                    data={listData} 
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
export default connect(mapStateToProps,mapDispatchToProps)(Post);