import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


const AccountMenuModal = ({isAccountMenuOpen, unShowAccountMenuModel}) => {

    const { logout } = useContext(AuthContext);

  return (
    <div>
        {isAccountMenuOpen &&
      <div className=" dropdown-menu-right profile-dropdown ">
        {/* <!-- item--> */}

        <a className="dropdown-item">
          <i className="mdi mdi-account-circle m-r-5 text-muted" /> Profile
        </a>

        <a className="dropdown-item">
          {/* <span className="badge badge-success float-right">5</span> */}
          <i className="mdi mdi-settings m-r-5 text-muted" /> Settings
        </a>
        <div className="dropdown-divider" />
        <a onClick={logout} className="dropdown-item">
          <i className="mdi mdi-logout m-r-5 text-muted" /> Logout
        </a>
      </div>}
    </div>
  );
};

export default AccountMenuModal;
