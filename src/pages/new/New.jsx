import React, { useState } from "react";
import "./newstyle.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { storage, db, auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'

function New({ img, title, inputs }) {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});

  const handleDataSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  console.log(data);
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
            <img
              className="leftimg"
              src={file ? URL.createObjectURL(file) : img}
              alt="img"
            />
          </div>
          <div className="bottomRight">
            <form onSubmit={handleDataSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <FileUploadRoundedIcon className="icon" />
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                />
              </div>

              {inputs?.map((input, index) => (
                <div className="formInput" key={index}>
                  <label htmlFor="">{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleInputChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
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
