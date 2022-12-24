import styles from "./App.module.css";
import MainPage from "./pages/mainPage/MainPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewsPage from "./pages/newsPage/NewsPage";
import Layout from "./components/Layout/Layout";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import { useSelector } from "react-redux";
import store from "./features/store/NewsStore";
import ErrorNews from "./pages/errorPage/ErrorNews";
import PersonalAreaPage from "./pages/privatPage/PersonalAreaPage";


function App() {
  const token = useSelector((state) => state.userReducer.token);
  const registration = useSelector((state) => state.userReducer.registration);
  const error = store.getState();
  // console.log(error.newsReducer.error);
  

  if (registration) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="mainPage" element={<MainPage />} />
            <Route path="/*" element={<Navigate to={"/mainPage"} replace />} />
            <Route path="news" element={<NewsPage />} />
          </Route>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Navigate to={"/signin"} replace />} />
          <Route path="error" element={<ErrorNews />} />
          <Route path="personalArea" element={<PersonalAreaPage to={"/signin"} />} />
        </Routes>
      </BrowserRouter>
    );
  } else if (!token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="mainPage" element={<MainPage />} />
            <Route path="/*" element={<Navigate to={"/mainPage"} replace />} />
            <Route path="news" element={<NewsPage />} />
          </Route>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="error" element={<ErrorNews />} />
          <Route path="personalArea" element={<Navigate to={"/signin"} />} />
        </Routes>
      </BrowserRouter>
    );
  } else if (token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="mainPage" element={<MainPage />} />
            <Route path="/*" element={<Navigate to={"/mainPage"} replace />} />
            <Route path="news" element={<NewsPage />} />
          </Route>
          <Route path="signin" element={<Navigate to={"/mainPage"} />} />
          <Route path="signup" element={<Navigate to={"/mainPage"} />} />
          <Route path="error" element={<ErrorNews />} />
          <Route path="personalArea" element={<PersonalAreaPage to={"/personalArea"} />} />
        </Routes>
      </BrowserRouter>
    );
}

}
export default App;
