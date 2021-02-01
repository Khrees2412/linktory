import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Box,
  Center,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
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
      <Box w="50%" p="2" m="auto">
        <form onSubmit={handleSubmit} method="POST" action="/api/user/register">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              error={errors.name}
              value={name}
              onChange={handleChange}
            />
          </FormControl>
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

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              error={errors.password}
              value={password}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="password2">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              name="password2"
              error={errors.password2}
              value={password2}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            type="submit"
            onClick={() => dispatch(registerUser(newUser, history))}
            mt="2"
            bg="blue.600"
            color="white"
            w="100%"
            _hover={{
              bg: "blue.400",
              color: "grey.300",
            }}
          >
            Sign In
          </Button>
          <br />
          <Center>
            <Text mt="2">
              Already signed up?
              <Button bg="yellow.300">
                <Link to="/login">Log in</Link>
              </Button>
            </Text>
          </Center>
        </form>
      </Box>
    </Fragment>
  );
}

SignIn.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default withRouter(SignIn);
