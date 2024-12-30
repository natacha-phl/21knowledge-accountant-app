import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LeftSideMenu from "./LeftSideMenu";
import TopBar from "./TopBar";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {/* Composant de menu de gauche */}
      <LeftSideMenu />
      <div className="content-page">
        {/* <!-- Start content --> */}
        <div className="content">
          <TopBar />

          {/* Contenu de la route privée */}
          {children}
        </div>
      </div>
    </div>
  );

  /*   // Redirect to login if the user is not authenticated
  return user ? children : <Navigate to="/login" />; */
};

export default PrivateRoute;
