import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}> </Route>
                <Route path="/home" element={<Home/>}> </Route>
            </Routes>
        </BrowserRouter>
        
    )
}