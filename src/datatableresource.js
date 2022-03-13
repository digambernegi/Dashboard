export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellwithimg">
          <img className="cellimg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "age", headerName: "Age", width:100 },
    { field: "email", headerName: "E-mail", width: 250 },
    { field: "status", headerName: "Status", width: 100 ,
    renderCell: (params) => {
        return (
          <div className="cellwithstatus">
            <span className={`cellstatus ${params.row.status}`}>{params.row.status}</span>
          </div>
        );
      },
    },

];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",

    email: "2snow@gmail.com",
    status: "pending",
    age: 42,
  },
  {
    id: 3,
    username: "Jamie Lannister",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    email: "2snow@gmail.com",
    status: "active",
    age: 42,
  },
  {
    id: 4,
    username: "Jamie Lannister",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    email: "2snow@gmail.com",
    status: "active",
    age: 42,
  },
  {
    id: 5,
    username: "Jamie Lannister",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    email: "2snow@gmail.com",
    status: "pending",
    age: 42,
  },
  {
    id: 6,
    username: "Jamie Lannister",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    email: "2snow@gmail.com",
    status: "active",
    age: 42,
  },
  {
    id: 7,
    username: "Jamie Lannister",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    email: "2snow@gmail.com",
    status: "active",
    age: 42,
  },
  {
    id: 8,
    username: "Jamie Lannister",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 9,
    username: "Jamie Lannister",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    email: "2snow@gmail.com",
    status: "pending",
    age: 42,
  },
  {
    id: 10,
    username: "Jamie Lannister",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },

];
