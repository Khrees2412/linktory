import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import "../../styles/login.css";
//import { Box } from "@chakra-ui/core";
import { Link, withRouter, useHistory } from "react-router-dom";
import { loginUser } from "../../redux/actions/authActions";

function LogIn() {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const errorsState = useSelector((state) => state.errors);

  if (auth.isAuthenticated) {
    history.push("/dashboard");
  }

  useEffect(() => {
    document.title = "Login | LinkTory";
  }, []);

  //debugger
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // if(errorsState){
  //   setErrors(errorsState)
  //}
  const { email, password } = input;
  const dispatch = useDispatch();

  const userData = {
    email,
    password,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const validate = () => {
    const { email, password } = userData;
    if (email && password) {
      dispatch(loginUser(userData));
    } else {
      alert("ENTER YOUR DETAILS TO CONTINUE");
    }
  };
  return (
    <Fragment>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit} method="POST" action="/api/user/login">
          <div className="form-control">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="email"
              error={errors.email}
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Password">Password</label>
            <span className="red-text">
              {errors.password}
              {errors.passwordincorrect}
            </span>
            <input
              type="password"
              name="password"
              error={errors.password}
              value={password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            onClick={() => validate()}
            className="submit-btn"
          >
            <strong>Log In</strong>
          </button>
          <br />
          <p>
            Don't yet have an account ? <Link to="/signin">Sign up here</Link>
          </p>
        </form>
      </div>
    </Fragment>
  );
}

export default withRouter(LogIn);
