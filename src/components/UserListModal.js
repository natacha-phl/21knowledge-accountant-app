import { useState, useEffect } from "react";
import { patchUser } from "../services/apiService";
import { toast } from 'react-toastify';


const UserListModal = ({
  userId,
  users,
  isModalOpen,
  unShowModal,
  isInputDisabled
}) => {
  const user = users.find(user => user.id == userId);

  const [formData, setFormData] = useState(null);

  useEffect(
    () => {
      const user = users.find(user => user.id == userId);
      setFormData(user);
    },
    [users, userId]
  );

  const handleSubmit = e => {
    e.preventDefault();

    patchUser(userId, formData)
      .then((response) => {
        toast("User successfully modified!", {type: 'success'});
      })
      .catch((error) => {
        toast("Error modifying user. Please try again.", {type: 'error'});
        console.error("Error modifying user:", error);
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      {isModalOpen &&
        formData &&
        <div
          id="myModal"
          className="modal fade show"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
          style={{ display: "block", paddingRight: "17px", overflowY: "auto" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myModalLabel">
                  {user.first_name + " " + user.last_name}
                </h5>
                <button
                  onClick={() => {
                    unShowModal();
                    setFormData(user);
                  }}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="text-center">
                  <img src={user.profile_picture} />
                </div>
                <form onSubmit={handleSubmit} className="">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      name="first_name"
                      type="text"
                      className="form-control"
                      required
                      value={formData.first_name}
                      onChange={handleChange}
                      disabled={isInputDisabled}
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
                        value={formData.last_name}
                        disabled={isInputDisabled}
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
                        value={formData.email}
                        disabled={isInputDisabled}
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
                          disabled={isInputDisabled}
                          checked={formData.gender === "Male"}
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
                          disabled={isInputDisabled}
                          checked={formData.gender === "Female"}
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
                          disabled={isInputDisabled}
                          checked={formData.gender === "Non-binary"}
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
                          disabled={isInputDisabled}
                          checked={formData.gender === "Prefer not to say"}
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

                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      name="date_of_birth"
                      type="text"
                      className="form-control"
                      id="mdate"
                      onChange={handleChange}
                      value={formData.date_of_birth}
                      disabled={isInputDisabled}
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
                        value={formData.phone_number}
                        disabled={isInputDisabled}
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
                        value={formData.address}
                        disabled={isInputDisabled}
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
                        value={formData.city}
                        disabled={isInputDisabled}
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
                        value={formData.state}
                        disabled={isInputDisabled}
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
                        value={formData.postalCode}
                        disabled={isInputDisabled}
                      />
                    </div>
                  </div>
                  <button
                  onClick={unShowModal}
                  type="button"
                  className="btn btn-secondary waves-effect close"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  hidden={isInputDisabled}
                  type="reset"
                  className="btn btn-secondary waves-effect waves-light m-l-5"
                >
                  Cancel
                </button>
                <button
                  hidden={isInputDisabled}
                  type="submit"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Save changes
                </button>
                </form>
              </div>
            </div>
            {/* <!-- /.modal-content --> */}
          </div>
          {/* <!-- /.modal-dialog --> */}
        </div>
      //   {/* <!-- /.modal --> */}
      }
    </div>
  );
};

export default UserListModal;
