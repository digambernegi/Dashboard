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
    email: "Snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",

    email: "Jamie@gmail.com",
    status: "pending",
    age: 22,
  },
  {
    id: 3,
    username: "Amelia Margaret",
    img: "https://www.riverphysio.sg/wp-content/uploads/2017/12/a65832155622ac173337874f02b218fb.png",
    email: "Amelia@gmail.com",
    status: "active",
    age: 27,
  },
  {
    id: 4,
    username: "Isabella Victoria",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    email: "Isabella@gmail.com",
    status: "active",
    age: 30,
  },
  {
    id: 5,
    username: "Jessica Lauren",
    img: "https://www.riverphysio.sg/wp-content/uploads/2017/12/a65832155622ac173337874f02b218fb.png",
    email: "Lauren@gmail.com",
    status: "pending",
    age: 20,
  },
  {
    id: 6,
    username: "Sophie Tracy",
    img: "https://www.riverphysio.sg/wp-content/uploads/2017/12/a65832155622ac173337874f02b218fb.png",
    email: "Sophie@gmail.com",
    status: "active",
    age: 46,
  },
  {
    id: 7,
    username: "Brown Walsh",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    email: "Walsh@gmail.com",
    status: "active",
    age: 26,
  },
  {
    id: 8,
    username: "Taylor Smith",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    email: "Taylor@gmail.com",
    status: "passive",
    age: 54,
  },
  {
    id: 9,
    username: "Thomas O'Ryan",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    email: "Thomas@gmail.com",
    status: "pending",
    age: 22,
  },
  {
    id: 10,
    username: "Gelbero Wilson",
    img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    email: "Gelbero@gmail.com",
    status: "passive",
    age: 52,
  },

];
