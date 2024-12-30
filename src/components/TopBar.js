import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountMenuModal from "./AccountMenuModal";
import { useState } from "react";

const TopBar = () => {


  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)
  const unShowAccountMenuModel = ()=> {
    setIsAccountMenuOpen(false)
  }
  return (
    // <!-- Top Bar Start -->

    <div className="topbar">
      <nav className="navbar-custom d-flex justify-content-end text-center">
        <ul className="list-inline float-right mb-0">
          {/* <!-- language--> */}
          {/* <li className="list-inline-item dropdown notification-list hide-phone">
            <a
              className="nav-link dropdown-toggle arrow-none waves-effect text-white"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              English{" "}
              <img
                src="assets/images/flags/us_flag.jpg"
                className="ml-2"
                height="16"
                alt=""
              />
            </a>
            <div className="dropdown-menu dropdown-menu-right language-switch">
              <a className="dropdown-item" href="#">
                <img
                  src="assets/images/flags/italy_flag.jpg"
                  alt=""
                  height="16"
                />
                <span> Italian </span>
              </a>
              <a className="dropdown-item" href="#">
                <img
                  src="assets/images/flags/french_flag.jpg"
                  alt=""
                  height="16"
                />
                <span> French </span>
              </a>
              <a className="dropdown-item" href="#">
                <img
                  src="assets/images/flags/spain_flag.jpg"
                  alt=""
                  height="16"
                />
                <span> Spanish </span>
              </a>
              <a className="dropdown-item" href="#">
                <img
                  src="assets/images/flags/russia_flag.jpg"
                  alt=""
                  height="16"
                />
                <span> Russian </span>
              </a>
            </div>
          </li> */}
          {/*  <li className="list-inline-item dropdown notification-list">
            <a
              className="nav-link dropdown-toggle arrow-none waves-effect"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="dripicons-mail noti-icon" />
              <span className="badge badge-danger noti-icon-badge">5</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg">
              <div className="dropdown-item noti-title">
                <h5>
                  <span className="badge badge-danger float-right">
                    745
                  </span>Messages
                </h5>
              </div>

              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon">
                  <img
                    src="assets/images/users/avatar-2.jpg"
                    alt="user-img"
                    className="img-fluid rounded-circle"
                  />{" "}
                </div>
                <p className="notify-details">
                  <b>Charles M. Jones</b>
                  <small className="text-muted">
                    Dummy text of the printing and typesetting industry.
                  </small>
                </p>
              </a>

              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon">
                  <img
                    src="assets/images/users/avatar-3.jpg"
                    alt="user-img"
                    className="img-fluid rounded-circle"
                  />{" "}
                </div>
                <p className="notify-details">
                  <b>Thomas J. Mimms</b>
                  <small className="text-muted">You have 87 unread messages</small>
                </p>
              </a>

              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon">
                  <img
                    src="assets/images/users/avatar-4.jpg"
                    alt="user-img"
                    className="img-fluid rounded-circle"
                  />{" "}
                </div>
                <p className="notify-details">
                  <b>Luis M. Konrad</b>
                  <small className="text-muted">
                    It is a long established fact that a reader will
                  </small>
                </p>
              </a>

              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item border-top"
              >
                View All
              </a>
            </div>
          </li> */}

          {/* <li className="list-inline-item dropdown notification-list">
            <a
              className="nav-link dropdown-toggle arrow-none waves-effect"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="dripicons-bell noti-icon" />
              <span className="badge badge-success noti-icon-badge">2</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg">
              <div className="dropdown-item noti-title">
                <h5>
                  <span className="badge badge-danger float-right">
                    87
                  </span>Notification
                </h5>
              </div>

              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-primary">
                  <i className="mdi mdi-cart-outline" />
                </div>
                <p className="notify-details">
                  <b>Your order is placed</b>
                  <small className="text-muted">
                    Dummy text of the printing and typesetting industry.
                  </small>
                </p>
              </a>

              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-success">
                  <i className="mdi mdi-message" />
                </div>
                <p className="notify-details">
                  <b>New Message received</b>
                  <small className="text-muted">You have 87 unread messages</small>
                </p>
              </a>

              <a href="javascript:void(0);" className="dropdown-item notify-item">
                <div className="notify-icon bg-warning">
                  <i className="mdi mdi-glass-cocktail" />
                </div>
                <p className="notify-details">
                  <b>Your item is shipped</b>
                  <small className="text-muted">
                    It is a long established fact that a reader will
                  </small>
                </p>
              </a>

              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item border-top"
              >
                View All
              </a>
            </div>
          </li> */}

          <li className="list-inline-item dropdown notification-list">
            <a
              className="nav-link dropdown-toggle arrow-none waves-effect nav-user"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              {/* <img
                src="assets/images/users/avatar-6.jpg"
                alt="user"
                className="rounded-circle"
              /> */}
              <AccountCircleIcon onClick={()=>{ isAccountMenuOpen == false ? setIsAccountMenuOpen(true) : setIsAccountMenuOpen(false)}} style={{ fontSize: '45px', color: 'gray' }} />
            </a>           
          </li>
          <li>
          <AccountMenuModal isAccountMenuOpen={isAccountMenuOpen} unShowAccountMenuModel={unShowAccountMenuModel}/>

          </li>
        
        </ul>




        <ul className="list-inline menu-left mb-0">
          <li className="float-left">
            <button className="button-menu-mobile open-left waves-light waves-effect">
              <i className="mdi mdi-menu" />
            </button>
          </li>



       
        </ul>

        <div className="clearfix" />
      </nav>
    </div>
    // <!-- Top Bar End -->
  );
};

export default TopBar;
