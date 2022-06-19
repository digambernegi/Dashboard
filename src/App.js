import React, { useState, useContext } from "react";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New.jsx";
import List from "./pages/list/List.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { userInputs, productInputs } from "./formData";
import "./style/global.css";
import { DarkModeContext } from "./context/darkModeContext.js";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  // const { currentUser } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  //childrens are all component in <Route>, so if there is a valid user render all chidrens or navigate to </login>
  const RequireAuth = ({ children }) => {
    console.log(children);
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            {/* childrens below */}
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />

              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />

              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New
                      inputs={userInputs}
                      title={"Add new user"}
                      img={
                        "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960"
                      }
                    />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />

              <Route path=":productId" element={<Single />} />

              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New
                      inputs={productInputs}
                      title={"Add new user"}
                      img={
                        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
                      }
                    />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>{" "}
          {/* <products> close */}
        </Routes>
        {/* </> close */}
      </BrowserRouter>
    </div>
  );
}

export default App;
