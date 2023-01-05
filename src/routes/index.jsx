import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Pedido from "../pages/Pedido";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth";
import CaminhaoPage from "../pages/Caminhao";
import ViagensPage from "../pages/Viagens";

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed ? <Item /> : <Signin />;
};


const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route exact path="/pedido" element={<Private Item={Pedido} />} />
                    <Route exact path="/caminhao" element={<Private Item={CaminhaoPage} />} />
                    <Route exact path="/viagens" element={<Private Item={ViagensPage} />} />
                    <Route path="/" element={<Private Item={Home} />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route path="*" element={<Private Item={Home} />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;