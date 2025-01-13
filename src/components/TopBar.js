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
