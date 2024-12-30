import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LeftSideMenu = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("dashboard");
  const styleOnClick = {color: "#605daf",
    backgroundColor: "rgba(96, 93, 175, 0.15)"}

  const navigate = useNavigate();

  return (
    <div className="left side-menu">
      <button
        type="button"
        className="button-menu-mobile button-menu-mobile-topbar open-left waves-effect"
      >
        <i className="ion-close" />
      </button>

      {/* // <!-- LOGO --> */}
      <div className="topbar-left">
        <div className="text-center bg-logo">
          <a href="index.html" className="logo">
            <i className="mdi mdi-bowling text-success" /> Zoogler
          </a>
          {/* <!-- <a href="index.html" className="logo"><img src="assets/images/logo.png" height="24" alt="logo"></a> --> */}
        </div>
      </div>
      <div className="sidebar-user">
        <img
          src="assets/images/users/avatar-6.jpg"
          alt="user"
          className="rounded-circle img-thumbnail mb-1"
        />
        <h6 className="">
          {user.first_name + " " + user.last_name}
        </h6>
      </div>

      <div className="sidebar-inner slimscrollleft">
        <div id="sidebar-menu">
          <ul>
            <li>
              <a
                onClick={() => {
                  setActiveTab("dashboard");
                  navigate("/dashboard");
                }}
                className="waves-effect"

                style={activeTab === 'dashboard' ? styleOnClick : {} }
              >
                <i className="dripicons-device-desktop" />
                <span>
                  {" "}Dashboard{" "}
                  {/* <span className="badge badge-pill badge-primary float-right">
                    7
                  </span> */}
                </span>
              </a>
            </li>

            <li className="has_sub">
              <a
                onClick={() => {
                  setActiveTab("users");
                  navigate("/userslist");
                }}
                className="waves-effect"
                style={activeTab === 'users' ? styleOnClick : {}}

              >
                <i className="dripicons-blog" />
                <span> Users </span>{" "}
                {/*                 <span className="badge badge-pill badge-info float-right">
                  8
                </span> */}
              </a>
            </li>

            <li className="has_sub">
              <a
                onClick={() => {
                  setActiveTab("settings");
                  navigate("/settings");
                }}
                className="waves-effect"
                style={activeTab === 'settings' ? styleOnClick : {} }

              >
                <i className="dripicons-card" />
                <span> Settings </span>{" "}
                <span className="float-right">
                  {/* <i className="mdi mdi-chevron-right" /> */}
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="clearfix" />
      </div>
      {/* <!-- end sidebarinner --> */}
    </div>
  );
};

export default LeftSideMenu;
