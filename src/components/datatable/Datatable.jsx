import './datatable.scss';

import { DataGrid} from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import {Link} from 'react-router-dom'


const Datatable = () =>{

  const actionColumn=[{
    field:'action',
    headerName:'action',
    width:200,
    renderCell:()=>{
      return(
        <div className="cellAction">
          <Link to="/users/test" style={{textDecorationLine:'none'}}>
          <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton">Delete</div>
        </div>
      )
    }

  }]
    return(
        <div className='datatable'>
          <div className="datatableTitle">
            Add New User 
            <Link to="/users/new" style={{textDecorationLine:'none',fontSize:16,color:'green',borderWidth:1,borderColor:'green',borderStyle:'solid',padding:5,borderRadius:5,marginBottom:5,cursor:'pointer'}}>
            Add New
            </Link>
          </div>
        <DataGrid
        className='datagrid'
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    )
}

export default Datatable;