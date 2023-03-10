import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Pedido from "../pages/Pedido";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import CaminhaoPage from "../pages/Caminhao";
import ViagensPage from "../pages/Viagens";
import { AuthProvider, Private } from "../contexts/auth";
import MensagensPage from "../pages/Mensagens";
import ProfilePage from "../pages/Profile";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            exact
            path="/pedido"
            element={
              <Private>
                <Pedido />
              </Private>
            }
          />
          <Route
            exact
            path="/caminhao"
            element={
              <Private>
                <CaminhaoPage />
              </Private>
            }
          />
          <Route
            exact
            path="/viagens"
            element={
              <Private>
                <ViagensPage />
              </Private>
            }
          />
          <Route
            exact
            path="/mensagens"
            element={
              <Private>
                <MensagensPage />
              </Private>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <Private>
                <ProfilePage />
              </Private>
            }
          />
          <Route
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default RoutesApp;
