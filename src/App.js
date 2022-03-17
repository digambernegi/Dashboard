import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New.jsx";
import List from "./pages/list/List.jsx";
import { Routes, Route } from "react-router-dom";
import {userInputs,productInputs} from './formData';
import './style/global.css'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext.js";

function App() {
  const {darkMode}=useContext(DarkModeContext)

  return (
    <div className={darkMode? 'app dark' : 'app'}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New inputs={userInputs} title={'Add new user'} img={'https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960'}/>} />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New inputs={productInputs} title={'Add new user'} img={"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
