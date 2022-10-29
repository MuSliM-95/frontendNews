import styles from "./App.module.css";
import MainPage from "./pages/mainPage/MainPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import News from "./pages/news/News";
import Layout from "./components/Layout/Layout";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import { useSelector } from "react-redux";
import PrivateRoom from "./pages/privateRoom/PrivateRoom";

function App() {
  const token = useSelector((state) => state.token);
  if (!token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="mainPage" element={<MainPage />}></Route>
            <Route
              path="/*"
              element={<Navigate to="/mainPage/" replace />}
            ></Route>
            <Route path="news" element={<News />}></Route>
          </Route>
          <Route path="privateRoom" element={<Signin />}></Route>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }else if(token){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="mainPage" element={<MainPage />}></Route>
            <Route
              path="/*"
              element={<Navigate to="/mainPage/" replace />}
            ></Route>
            <Route path="news" element={<News />}></Route>
          </Route>
          <Route path="privateRoom" element={<PrivateRoom />}></Route>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
