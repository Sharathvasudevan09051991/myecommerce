import React, { Fragment, useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterComplete = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    setemail(localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      console.log("RESULT:", result);
      if (result.user.emailVerified) {
        window.localStorage.removeItem("emailForRegistration");
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const registrationCompleteForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="email" className="form-control" value={email} disabled />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          autoFocus
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Register Complete
      </button>
    </form>
  );

  return (
    <Fragment>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>Registration Complete Form</h4>
            {registrationCompleteForm()}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterComplete;
