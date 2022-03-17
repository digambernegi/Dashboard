import React from "react";
import "./tablestyle.css";
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
    product: "Acer Nitro 5",
    img: "https://static2-ecemea.acer.com/media/catalog/product/cache/4d1e466ee0151a7142143e21e5d254f9/_/n/_nitro5_an515-45_bl1_rgb-bk_1000main_nh.qbcek.005.png",
    customer: "Ashley Miller",
    date: "12 March",
    amount: 785,
    method: "COD",
    status: "approved",
  },
  {
    id: 3726,
    product: "Acer Aspire 5",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/10/UT/VD/EG/46613191/dell-inspiron-3511-win-11-laptop-ci3-11th-8gb-1tb-hdd-win11-mso-2021-15-6-1yr-nbd-carbon-black--500x500.jpg",
    customer: "Ruby Mile",
    date: "11 March",
    amount: 354,
    method: "Online",
    status: "pending",
  },
  {
    id: 9438,
    product: "Dell 15",
    img: "https://m.media-amazon.com/images/I/41ASSw3ECzL.jpg",
    customer: "Visha Long",
    date: "8 March",
    amount: 557,
    method: "Online",
    status: "pending",
  },
  {
    id: 2872,
    product: "Hp Pavilion 15",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/1/CQ/TT/UV/121097082/new-laptop-500x500.jpg",
    customer: "Peter Jone",
    date: "8 March",
    amount:888,
    method: "Online",
    status: "approved",
  },
];

const BasicTable = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650, textAlign:"center" }} aria-label="simple table">
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
              <TableCell className="tableCell">{`$ ${row.amount}`}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
