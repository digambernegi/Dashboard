import React, { useState } from "react";
import "./dtstyle.css";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../datatableresource";
import { Link } from "react-router-dom";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    console.log("delte");
  };

  const actioncolumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/person" style={{ textDecoration: "none" }}>
              <div className="viewButton">Views</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link" style={{ textDecoration: "none" }}>
          Add New
        </Link>
      </div>
      <div className="userGrid">
        <DataGrid
          className="dg"
          rows={data}
          columns={userColumns.concat(actioncolumn)}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
