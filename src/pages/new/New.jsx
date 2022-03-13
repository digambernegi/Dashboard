import React, { useState } from "react";
import "./newstyle.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

function New({img, title, inputs }) {
  console.log(title, inputs,img);

  const [file, setFile] = useState("");
  console.log(file)
  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />

        <div className="newTop">
          <h1 className="topTitle">{title}</h1>
        </div>
        <div className="newBottom">

          <div className="bottomLeft">
            <img className="leftimg" src={file? URL.createObjectURL(file) : img} alt='img' />
          </div>
          <div className="bottomRight">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <FileUploadRoundedIcon className="icon" />
                </label>
                <input onChange={(e) => setFile(e.target.files[0]) } type="file" id="file" style={{ display: "none" }} />
              </div>

              {inputs?.map((input) => (
                <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
