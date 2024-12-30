import React, { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../services/apiService";
import UserListModal from "../components/UserListModal";
import DataTable from "react-data-table-component";
import AddUserModal from "../components/AddUserModal";
import Footer from "../components/Footer";


const UsersList = () => {
  // VARIABLE

  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [isModalAddUserOpen, setIsModalAddUserOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isDisabledTrash, setIsDisabledTrash] = useState(true)

  // FETCH ALL USERS
  useEffect(
    () => {
      fetchUsers()
        .then(data => {
          const dataFiltered = data.filter(userFiltered => {
            return (
              (userFiltered.first_name?.toLowerCase()
                .includes(searchTerm.toLowerCase()) ||"") ||
              (userFiltered.last_name?.toLowerCase()
                .includes(searchTerm.toLowerCase()) ||"") ||
              (userFiltered.phone_number?.toLowerCase()
                .includes(searchTerm.toLowerCase()) ||"") ||
              (userFiltered.email?.toLowerCase()
                .includes(searchTerm.toLowerCase()) , "") ||
              userFiltered.businesses?.some(business =>
                business.business_name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
            );
          });
          // setUsers(data);
          setUsers(dataFiltered);
          setIsLoading(false)
          setIsDisabledTrash("true")
        })
        .catch(error => console.error("Error loading users:", error));
    },
    [searchTerm]
 );

  // REMOVE USERS

  const removeUser = id => {
    const user = users.find(user => user.id === id);
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${user.first_name} ${user.last_name} ?`
    );

    if (confirmDelete) {
      deleteUser(id)
        .then(() => {
          setUsers(users.filter(user => user.id !== id));
        })
        .catch(error => console.error("Error deleting user:", error));
    }
  };


  const removeUsers = usersSeletected => {

    if (Array.isArray(usersSeletected)){

      const usersId = usersSeletected.map(user => user.id)
      console.log(usersId)

      let usersNames = [];

      usersId.forEach(userId => {
        users
          .filter(user => user.id == userId)
          .forEach(user => usersNames.push(user.first_name + " " + user.last_name));
      });
           
        
      

      console.log(usersNames)

      const confirmDelete = window.confirm(
        `Are you sure you want to delete : ${usersNames.join(' and ')}`
      );

      usersId.forEach(userId =>{


      if (confirmDelete) {
        deleteUser(userId)
          .then(() => {
            setUsers(users.filter(user => user.id !== userId));
          })
          .catch(error => console.error("Error deleting user:", error));
      }
    })

    }
  
  }

  // MODAL FUNCTION

  const showModal = id => {
    setUserId(id);

    setIsModalOpen(true);
    setIsInputDisabled(false);
  };

  const unShowModal = () => {
    setIsModalOpen(false);
    setIsModalAddUserOpen(false);
  };

  const showModalReadOnly = id => {
    setUserId(id);

    setIsInputDisabled(true);
    setIsModalOpen(true);
  };

  const showModalAdd = () => {
    setIsModalAddUserOpen(true);
  };

  // DATATABLE

  const columns = [
    {
      name: "Name",
      selector: row => `${row.first_name} ${row.last_name} `,
      sortable: true,
    },
    {
      name: "Email",
      selector: row => row.email,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: row => row.phone_number,
      sortable: true,
    },

    {
      name: "Companies",
      selector: row =>
        row.businesses.map(business => {
          return business.business_name + " ";
        }),
      sortable: true,
      width : "300px"
    },
    {
      name: "Actions",
      cell: row =>
        <div className="d-flex">
          <button className="btn btn-primary waves-effect waves-light"
            onClick={() => showModalReadOnly(row.id)}
            style={{ marginRight: "10px" }}
          >
            <i style={{ cursor: "pointer" }} className="fa-solid fa-eye" />
          </button>
          <button className="btn btn-primary waves-effect waves-light"
            onClick={() => showModal(row.id)}
            style={{ marginRight: "10px" }}
          >
            <i
              style={{ cursor: "pointer" }}
              className="fa-solid fa-pen-to-square"
            />
          </button>
          <button className="btn btn-primary waves-effect waves-light" onClick={() => removeUser(row.id)}>
            <i style={{ cursor: "pointer" }} className="fa-solid fa-trash" />
          </button>
        </div>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "150px"
    }
  ];


  const handleSelectedRowChange = (state) => {
    const rows = state.selectedRows;
    setSelectedRows(rows)
    if(rows.length>=1){
      setIsDisabledTrash(false)
      } else {
        setIsDisabledTrash(true)
      }
  }



  return (
    <div>
      <UserListModal
        users={users}
        userId={userId}
        isModalOpen={isModalOpen}
        unShowModal={unShowModal}
        isInputDisabled={isInputDisabled}
      />

      <AddUserModal
        isModalAddUserOpen={isModalAddUserOpen}
        unShowModal={unShowModal}
      />



          <div className="row">
            <div className="col-sm-12">
              <div className="page-title-box">
               {/*  <div className="btn-group float-right">
                  <ol className="breadcrumb hide-phone p-0 m-0">
                    <li className="breadcrumb-item">
                      <a href="#">Zoogler</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Tables</a>
                    </li>
                    <li className="breadcrumb-item active">Datatable</li>
                  </ol>
                </div> */}
                <h4 className="page-title">Users</h4>
              </div>
            </div>
          </div>

          {isLoading && users.length < 1
            ? <div id="preloader">
                <div id="status">
                  <div className="spinner" />
                </div>
              </div>
            : <div className="row">
                <div className="col-12">
                  <div className="card">
                    
                    
                    <div className="card-body  ">

                      <div><button hidden={isDisabledTrash} className="btn btn-primary waves-effect waves-light" onClick={() => removeUsers(selectedRows)}><i style={{ cursor: "pointer" }} className="fa-solid fa-trash"/></button>

                        </div>

                      <div className="d-flex d-flex flex-wrap justify-content-end ">

                      <form>
                        <input
                          type="text"
                          className="form-control"
                          name="defaultconfig"
                          id="defaultconfig"
                          onChange={e => {
                            setSearchTerm(e.target.value);
                          }}
                        />
                      </form>
                      <button style={{marginLeft: "42px"}}
                        onClick={showModalAdd}
                        className="btn btn-primary waves-effect waves-light ms-auto"
                      >
                        {" "}Add
                      </button>
                      </div>
                      <DataTable
                        columns={columns}
                        data={users}
                        pagination
                        highlightOnHover
                        selectableRows  
                        onSelectedRowsChange={handleSelectedRowChange}  
                        responsive
                        dense
                              
                      />
                      {/* <button hidden={isDisabledTrash} className="btn btn-primary waves-effect waves-light" onClick={() => removeUsers(selectedRows)}><i style={{ cursor: "pointer" }} className="fa-solid fa-trash"/></button> */}
                    </div>
                    
                  </div>
                </div>
              </div>}
  
      <Footer/>
    </div>

    
  );


};

export default UsersList;
