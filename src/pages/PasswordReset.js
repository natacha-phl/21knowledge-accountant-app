const PasswordReset = () => {
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
                onSubmit={handleSignUp}
                className="form-horizontal"
                action="index.html"
              >
                <div className="form-group row">
                  <div className="col-12" />
                  <p>
                    {messageEmail}
                  </p>
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      name="first_name"
                      className="form-control"
                      type="text"
                      required
                      placeholder="First name"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-12">
                    <input
                      name="last_name"
                      className="form-control"
                      type="text"
                      required
                      placeholder="Last name"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      name="email"
                      className="form-control"
                      type="email"
                      required
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-12">
                    <input
                      name="password"
                      className="form-control"
                      type="password"
                      required
                      placeholder="Password"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="password"
                      required
                      placeholder="Password verification"
                      onChange={e => {
                        setPasswordVerified(e.target.value);
                        setMessagePassword("");
                      }}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-12" />
                  <p>
                    {messagePassword}
                  </p>
                </div>

                <div className="form-group text-center row m-t-20">
                  <div className="col-12">
                    <button
                      className="btn btn-danger btn-block waves-effect waves-light"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </div>

                <div className="form-group m-t-10 mb-0 row">
                  <div className="col-12 m-t-20 text-center">
                    <a href="pages-login.html" className="text-muted">
                      Already have account?
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
