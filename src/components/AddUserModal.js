import { createUser } from "../services/apiService";
import { useState } from "react";
import { toast } from "react-toastify";
// import { EmailJSResponseStatus } from "emailjs-com";
import emailjs from "emailjs-com";

const AddUserModal = ({ isModalAddUserOpen, unShowModal }) => {
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

    const passwordToReorder =
      passwordPart1 + passwordPart2 + passwordPart3 + passwordPart4;

    return passwordToReorder;
  };

  const [formData, setFormData] = useState({
    password: temporaryPassword()
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (userEmail, userPassword, userName) => {
    const templateParams = {
      user_email: userEmail,
      user_password: userPassword,
      user_name : userName
    };

    emailjs
      .send(
        "service_kiwssdi", // Remplace avec ton SERVICE_ID
        "template_e8tlt1t", // Remplace avec ton TEMPLATE_ID
        templateParams,
        "W7KR2GFHpu9RQm2kX" // Remplace avec ton USER_ID
      )
      .then(response => {
        console.log(
          "Email envoyé avec succès : ",
          response.status,
          response.text
        );
        // alert("Email envoyé avec succès.");
      })
      .catch(error => {
        // console.error("Erreur lors de l’envoi de l’email : ", error);
        alert("Erreur lors de l’envoi de l’email.");
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createUser(formData)
      .then(response => {
        sendEmail('miss_haiti92@hotmail.com', formData.password, formData.first_name)
        unShowModal()
        toast("User successfully added. The email has been sent to the user", { type: "success" });
      })
      .catch(error => {
        toast("Error adding user. Please try again.", { type: "error" });
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
          style={{ display: "block", paddingRight: "17px", overflowY: "auto" }}
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
              <div
                className="modal-body"
                style={{ maxHeight: "500px", overflowY: "auto" }}
              >
                <form onSubmit={handleSubmit} className="">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input
                      name="first_name"
                      type="text"
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Last Name *</label>
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
                    <label>E-Mail *</label>
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
                          htmlFor="customCheck1"
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
                          value="Female"
                          onChange={handleChange}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck2"
                        >
                          Female
                        </label>
                      </div>

                      <div className="custom-control custom-checkbox">
                        <input
                          name="gender"
                          type="radio"
                          className="custom-control-input"
                          id="customCheck3"
                          value="Non-binary"
                          onChange={handleChange}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck3"
                        >
                          Non-binary
                        </label>
                      </div>

                      <div className="custom-control custom-checkbox">
                        <input
                          name="gender"
                          type="radio"
                          className="custom-control-input"
                          id="customCheck4"
                          value="Prefer not to say"
                          onChange={handleChange}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck4"
                        >
                          Prefer not to say
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Date of Birth</label>
                    <input
                      name="date_of_birth"
                      type="date"
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
                        onClick={unShowModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer" />
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

export default AddUserModal;
