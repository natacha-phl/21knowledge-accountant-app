import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = e => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div>
      <div className="accountbg" />
      <div className="wrapper-page">
        <div className="card">
          <div className="card-body">
            <div className="text-center m-b-15">
              <a href="index.html" className="logo logo-admin">
                <img src="assets/images/logo.png" height="24" alt="logo" />
              </a>
            </div>

            <div className="p-3">
              <form
                onSubmit={handleLogin}
                className="form-horizontal m-t-20"
                action="index.html"
              >
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="text"
                      required=""
                      placeholder="Username"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label className="custom-control-label" for="customCheck1">
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group text-center row m-t-20">
                  <div className="col-12">
                    <button
                      className="btn btn-danger btn-block waves-effect waves-light"
                      type="submit"
                    >
                      Log In
                    </button>
                  </div>
                </div>

                <div className="form-group m-t-10 mb-0 row">
                  <div className="col-sm-7 m-t-20">
                    <a href="pages-recoverpw.html" className="text-muted">
                      <i className="mdi mdi-lock" />{" "}
                      <small>Forgot your password ?</small>
                    </a>
                  </div>
                  <div className="col-sm-5 m-t-20">
                    <a href="pages-register.html" className="text-muted">
                      <i className="mdi mdi-account-circle" />{" "}
                      <small>Create an account ?</small>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
