import './index.css';

/**
 * Table Component
 * Renderiza una tabla a partir de columnas y informacion
 * @param {*} props
 * @returns 
 */
export function Table(props){
    const {
        columns,
        data
    } = props;
    return <div className='table'>
        <table>
            <thead>
                <tr>
                    { columns.map((column, index)=> <th key={index}>{column.header}</th>) }
                </tr>
            </thead>
            <tbody>
            {
                data.map(
                    (row, index)=><tr key={index}>
                        {columns.map((column, index)=> <td key={index}>{row[column.accessor]}</td>)}
                    </tr>
                )
            }
            </tbody>
        </table>
    </div>
}