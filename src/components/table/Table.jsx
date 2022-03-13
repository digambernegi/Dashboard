import React from "react";
import './tablestyle.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: 1312,
    product: "dwhjsdbjh",
    img: "https://www.reliancedigital.in/medias/Acer-UN-HJESI-001-Laptops-491838440-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDQxMHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaDgwLzkzMjg2ODIwMDg2MDYuanBnfDM3MzhmMzhlNTRlMWI3NDdmNGY3OWM4YzI1OGJjYzYxOWQ1MmFmZjEyOTdhNmU3YzAzYzk0MDNjYTkzNTA0N2I",
    customer: "djhbasd",
    date: "1 March",
    amount: 785,
    method: "COD",
    status: "approved",
  },
  {
    id: 1312,
    product: "dwhjsdbjh",
    img: "https://www.reliancedigital.in/medias/Acer-UN-HJESI-001-Laptops-491838440-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDQxMHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaDgwLzkzMjg2ODIwMDg2MDYuanBnfDM3MzhmMzhlNTRlMWI3NDdmNGY3OWM4YzI1OGJjYzYxOWQ1MmFmZjEyOTdhNmU3YzAzYzk0MDNjYTkzNTA0N2I",
    customer: "djhbasd",
    date: "1 March",
    amount: 785,
    method: "COD",
    status: "pending",
  },
  {
    id: 1312,
    product: "dwhjsdbjh",
    img: "https://www.reliancedigital.in/medias/Acer-UN-HJESI-001-Laptops-491838440-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDQxMHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaDgwLzkzMjg2ODIwMDg2MDYuanBnfDM3MzhmMzhlNTRlMWI3NDdmNGY3OWM4YzI1OGJjYzYxOWQ1MmFmZjEyOTdhNmU3YzAzYzk0MDNjYTkzNTA0N2I",
    customer: "djhbasd",
    date: "1 March",
    amount: 785,
    method: "COD",
    status: "pending",
  },
  {
    id: 1312,
    product: "dwhjsdbjh",
    img: "https://www.reliancedigital.in/medias/Acer-UN-HJESI-001-Laptops-491838440-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDQxMHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaDgwLzkzMjg2ODIwMDg2MDYuanBnfDM3MzhmMzhlNTRlMWI3NDdmNGY3OWM4YzI1OGJjYzYxOWQ1MmFmZjEyOTdhNmU3YzAzYzk0MDNjYTkzNTA0N2I",
    customer: "djhbasd",
    date: "1 March",
    amount: 785,
    method: "COD",
    status: "approved",
  },
];

const BasicTable = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="productimgwrapper">
                  <img className="image" src={row.img} alt="productimg" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell"><span className={`status ${row.status}`}>{row.status}</span> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
