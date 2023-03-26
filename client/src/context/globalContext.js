import axios from "axios";
import { createContext, useContext, useState } from "react";
import { setAuthToken } from "../config/api";

const GlobalContext = createContext({});

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider = (props) => {
  const [isLoadUser, setIsLoadUser] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [photo, setPhoto] = useState("");

  const userIsLogin = async (tkn) => {
    try {
      if (tkn) {
        console.log(tkn);
        localStorage.setItem("token", tkn);
        setAuthToken(tkn);
      }
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/check-auth`
      );
      setPhoto(result.data.data.photo);
      setIsLogin(true);
    } catch (error) {
      localStorage.removeItem("token");
    }
  };

  const userLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("token");
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoadUser: isLoadUser,
        setIsLoadUser: setIsLoadUser,
        isLogin: isLogin,
        userIsLogin: userIsLogin,
        photo: photo,
        userLogout: userLogout,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
