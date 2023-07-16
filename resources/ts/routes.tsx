import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/components/Header";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
