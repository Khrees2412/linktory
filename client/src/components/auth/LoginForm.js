import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import {
  Button,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Center,
} from "@chakra-ui/react";
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
      <Box w="50%" p="2" m="auto">
        <form onSubmit={handleSubmit} method="POST" action="/api/user/login">
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              error={errors.email}
              value={email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <span className="red-text">
              {errors.password}
              {errors.passwordincorrect}
            </span>
            <Input
              type="password"
              name="password"
              error={errors.password}
              value={password}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            type="submit"
            onClick={() => validate()}
            mt="2"
            bg="blue.600"
            color="white"
            w="100%"
            _hover={{
              bg: "blue.400",
              color: "grey.300",
            }}
          >
            Log In
          </Button>
          <Center>
            <Text mt="2">
              Need an account ?
              <Button bg="yellow.300">
                <Link to="/signin">Get One</Link>
              </Button>
            </Text>
          </Center>
        </form>
      </Box>
    </Fragment>
  );
}

export default withRouter(LogIn);
