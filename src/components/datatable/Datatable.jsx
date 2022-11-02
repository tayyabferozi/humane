import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import {Link} from "react-router-dom"




const Datatable = (params) =>{

  const handleDelete =(id) =>{
    
  }

    const actionColumn  = [
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: () => {
            return (
              <div className="cellAction">
                 <Link to="/users/test" style={{textDecoration: "none"}}>    
                <div className="viewButton">View</div>
                </Link>
                <Link to="/users" style={{textDecoration: "none"}}>    
                <div className="deleteButton" onClick={()=>handleDelete(params.rows.id)}>Delete</div>
                </Link>
              </div>
            );
          },
        },  
  ];
    return(
        <div className="datatable">
          <div className="datatableTitle">
            Add New User
            <Link to="/users/new" className="link">
              Add New
              </Link>
          </div>

<DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />  
          
           </div>
    )

}

export default Datatable