import { createContext, useEffect, useState, useContext } from "react";
import { api, createUser, createSession } from "../services/api";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState();

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    var menu = localStorage.getItem("menu");
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    if (menu == null) {
      localStorage.setItem("menu", false);
      setOpen(false);
    } else {
      setOpen(menu === "true" ? true : false);
    }

    setLoading(false);
  }, []);

  const signin = async (email, senha) => {
    setLoading(true);
    const response = await createSession(email, senha).catch(function (err) {
      const erro = err.response.data
        .split("at")[0]
        .split("System.Exception:")[1];
      alert(erro);
    });

    if (response !== null) {
      const loggedUser = response.data.dados;
      const token = response.data.accessToken;
      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser(loggedUser);
      navigate("/");
    }
  };

  const signup = async (email, password) => {
    setLoading(true);
    await createUser(email, password).catch(function (err) {
      alert(err);
    });
  };

  const signout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.common["Authorization"] = null;
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signin,
        signup,
        signout,
        open,
        setOpen,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const Private = ({ children }) => {
  const { signed, loading } = useContext(AuthContext);
  if (loading) {
    return <div className="loding">Carregando...</div>;
  }
  if (!signed) {
    return <Navigate to="/signin" />;
  }

  return children;
};
