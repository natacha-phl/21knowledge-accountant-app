import { createUser } from "../services/apiService";
import { useState } from "react";
import { toast } from "react-toastify";


const AddUserModal = ({isModalAddUserOpen, unShowModal}) => {

    
        const [formData, setFormData] = useState({
          password : "Abc12345678"
        });
      
        const handleChange = e => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();   
          createUser(formData)
          .then((response) => {
            toast("User successfully added", {type: 'success'});
          })
          .catch((error) => {
            toast("Error adding user. Please try again.", {type: 'error'});
            console.error("Error adding user:", error);
          });
        };



    return (


        <div>
      {isModalAddUserOpen &&
        <div
          id="myModal"
          className="modal fade show"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
          style={{ display: "block", paddingRight: "17px", overflowY:'auto' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myModalLabel">
                Ajouter un utilisateur
                </h5>
                <button
                  onClick={unShowModal}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit} className="">

                {/* <div className="form-group">
                    <label>Picture</label>
                    <input
                      name="profile_picture"
                      type="file"
                      className="form-control"
                      required
                      onChange={handleChange} 
                    />
                  </div> */}

            

                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      name="first_name"
                      type="text"
                      className="form-control"
                      required
                      onChange={handleChange} 
                    />
                  </div>

                  <div className="form-group">
                    <label>Last Name</label>
                    <div>
                      <input
                        name="last_name"
                        type="text"
                        id="pass2"
                        className="form-control"
                        required
                        onChange={handleChange}

                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>E-Mail</label>
                    <div>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        required
                        parsley-type="email"
                        onChange={handleChange}

                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <div>
                      <div className="custom-control custom-checkbox">
                        <input
                          name="gender"
                          type="radio"
                          className="custom-control-input"
                          id="customCheck1"
                          value="Male"
                          onChange={handleChange}


                        />
                        <label
                          className="custom-control-label"
                          for="customCheck1"
                        >
                          Male
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          name="gender"
                          type="radio"
                          className="custom-control-input"
                          id="customCheck2"
                          data-parsley-multiple="groups"
                          data-parsley-mincheck="2"
                          value="Female"
                          onChange={handleChange}


                        />
                        <label
                          className="custom-control-label"
                          for="customCheck2"
                        >
                          Female
                        </label>
                      </div>

                      <div className="custom-control custom-checkbox">
                        <input
                          name="gender"
                          type="radio"
                          className="custom-control-input"
                          id="customCheck2"
                          data-parsley-multiple="groups"
                          data-parsley-mincheck="2"
                          value="Non-binary"
                          onChange={handleChange}


                        />
                        <label
                          className="custom-control-label"
                          for="customCheck2"
                        >
                          Non-binary
                        </label>
                      </div>

                      <div className="custom-control custom-checkbox">
                        <input
                          name="gender"
                          type="radio"
                          className="custom-control-input"
                          id="customCheck2"
                          data-parsley-multiple="groups"
                          data-parsley-mincheck="2"
                          value="Prefer not to say"
                          onChange={handleChange}


                        />
                        <label
                          className="custom-control-label"
                          for="customCheck2"
                        >
                          Prefer not to say
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="custom-control-label" for="customCheck2">
                      Date of Birth
                    </label>
                    <input
                      name="date_of_birth"
                      type="text"
                      className="form-control"
                     
                      id="mdate"
                      onChange={handleChange}

                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <div>
                      <input
                        name="phone_number"
                        type="text"
                        className="form-control"
                        onChange={handleChange}

                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Street</label>
                    <div>
                      <input
                        name="address"
                        type="text"
                        className="form-control"
                        onChange={handleChange}

                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <div>
                      <input
                        name="city"
                        type="text"
                        className="form-control"
                        onChange={handleChange}

                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <div>
                      <input
                        name="state"
                        data-parsley-type="alphanum"
                        type="text"
                        className="form-control"
                        onChange={handleChange}

                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Postal Code</label>
                    <div>
                      <input
                        name="postal_code"
                        type="text"
                        className="form-control"
                        onChange={handleChange}


                      />
                    </div>
                  </div>

                  <div className="form-group mb-0">
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        Submit
                      </button>
                      <button
                        type="reset"
                        className="btn btn-secondary waves-effect m-l-5"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  onClick={unShowModal}
                  type="button"
                  className="btn btn-secondary waves-effect close"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Save changes
                </button>
              </div>
            </div>
            {/* <!-- /.modal-content --> */}
          </div>
          {/* <!-- /.modal-dialog --> */}
        </div>
      //   {/* <!-- /.modal --> */}
      }
    </div>
    )
}


export default AddUserModal