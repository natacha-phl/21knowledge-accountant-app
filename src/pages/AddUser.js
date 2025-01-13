import { createUser } from "../services/apiService";
import { useState } from "react";
import LeftSideMenu from "../components/LeftSideMenu";
import TopBar from "../components/TopBar";
import { EmailJSResponseStatus } from "emailjs-com";

const AddUser = () => {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  const getRandomChars = chars => {
    let result = "";
    for (let i = 0; i < 4; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const temporaryPassword = () => {
    const passwordPart1 = getRandomChars(lowerCase, 3);
    const passwordPart2 = getRandomChars(upperCase, 3);
    const passwordPart3 = getRandomChars(numbers, 3);
    const passwordPart4 = getRandomChars(specialChars, 3);

    const passwordToReorder = passwordPart1+passwordPart2+passwordPart3+passwordPart4


    // for (let i = 0; i<


    return passwordToReorder
  };


  temporaryPassword()
  console.log(temporaryPassword)



  const [formData, setFormData] = useState({
    /*     firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    createdBy: "",  */
    password: temporaryPassword()
  });



  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createUser(formData);
  };


  console.log(temporaryPassword())


  return (
    <div>
      <LeftSideMenu />
      <div className="content-page">
        {/* <!-- Start content --> */}
        <div className="content">
          <TopBar />
          <div className="page-content-wrapper ">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-title-box">
                    <div className="btn-group float-right">
                      <ol className="breadcrumb hide-phone p-0 m-0">
                        <li className="breadcrumb-item">
                          <a href="#">Zoogler</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Forms</a>
                        </li>
                        <li className="breadcrumb-item active">
                          Ajouter un utilisateur
                        </li>
                      </ol>
                    </div>
                    <h4 className="page-title">Validation</h4>
                  </div>
                </div>
              </div>
              {/* <!-- end page title end breadcrumb --> */}
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="mt-0 header-title">New user</h4>
                      <p className="text-muted mb-4 font-13">
                        Required fields to create a new user.
                      </p>

                      <form onSubmit={handleSubmit} className="" action="#">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            name="first_name"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Enter the user's first name"
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
                              placeholder="Enter the user's last name "
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
                              placeholder="Enter the user's valid e-mail"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <p className="text-muted mb-4 mt-4 font-13">Optional</p>
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
                          <label
                            className="custom-control-label"
                            for="customCheck2"
                          >
                            Date of Birth
                          </label>
                          <input
                            name="date_of_birth"
                            type="text"
                            className="form-control"
                            placeholder="2017-06-04"
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
                              placeholder="Enter the user's phone number"
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
                              placeholder="Enter the user's street address"
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
                              placeholder="Enter the user's city address"
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
                              placeholder="Enter the user's state address"
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
                              placeholder="Enter the user's postal code address"
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
                  </div>
                </div>
                {/* <!-- end col --> */}
              </div>
              {/* <!-- end row -->  */}
            </div>
            {/* <!-- container --> */}
          </div>
          {/* <!-- Page content Wrapper --> */}
        </div>
        {/* <!-- End Right content here --> */}
      </div>
      {/* <!-- END wrapper --> */}
    </div>
  );
};

export default AddUser;
