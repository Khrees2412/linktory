import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import "../../styles/login.css";
import { Link, withRouter, useHistory } from "react-router-dom";
import { registerUser } from "../../redux/actions/authActions";

function SignIn() {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const errorsState = useSelector((state) => state.errors);

  if (auth.isAuthenticated) {
    history.push("/dashboard");
  }

  useEffect(() => {
    document.title = "Sign Up | LinkTory";
    if (!errorsState) {
      setErrors(errorsState);
    }
  }, []);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});

  const { name, email, password, password2 } = input;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const newUser = {
    name,
    email,
    password,
    password2,
    errors,
  };

  const dispatch = useDispatch();

  return (
    <Fragment>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit} method="POST" action="/api/user/register">
          <div className="form-control">
            <label htmlFor="Name">Name</label>
            <input
              id="Name"
              type="text"
              name="name"
              error={errors.name}
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Email">Email</label>
            <input
              id="Email"
              type="email"
              name="email"
              error={errors.email}
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Password">Password</label>
            <input
              id="Password"
              type="password"
              name="password"
              error={errors.password}
              value={password}
              onChange={handleChange}
            />
          </div>
          <div class="form-control">
            <label htmlFor="Confirm-Password">Confirm Your Password</label>
            <input
              id="Confirm-Password"
              type="password"
              name="password2"
              error={errors.password2}
              value={password2}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            onClick={() => dispatch(registerUser(newUser, history))}
            className="submit-btn"
          >
            <strong>Sign In</strong>
          </button>
          <br />
          <p>
            Already signed up ? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </Fragment>
  );
}

SignIn.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default withRouter(SignIn);
