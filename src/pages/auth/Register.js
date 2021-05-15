import React, { Fragment, useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setemail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let config = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(`Email is sent to ${email}. Click the link for registration`);
    window.localStorage.setItem("emailForRegistration", email);
    setemail("");
  };

  const registrationForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          autoFocus
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );

  return (
    <Fragment>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>Register</h4>
            {registrationForm()}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
