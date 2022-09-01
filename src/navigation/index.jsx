import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
 import Home from "../pages/Home";
 import Login from "../pages/Login";
 import Register from "../pages/Register";
 import Menu from "../pages/Menu";
 import Cart from "../pages/Cart";
 import PaymentSuccess from "../pages/PaymentSuccess";
const Navigation = () => {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/legister" element={<Register />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/payment-success" element={<PaymentSuccess />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Navigation