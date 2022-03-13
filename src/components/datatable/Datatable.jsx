import React,{useState} from "react";
import "./dtstyle.css";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../datatableresource";

const Datatable = () => {
  const [data, setData] = useState(userRows)
  
  const handleDelete = (id)=>{
  setData(data.filter(item => item.id !== id))
  console.log('delte')
  }
  
  const actioncolumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton">Views</div>
            <div className="deleteButton"
            onClick={() =>handleDelete(params.row.id)}>delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={userColumns.concat(actioncolumn)}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
