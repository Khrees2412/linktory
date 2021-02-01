import React, { Fragment, useEffect } from "react";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
// import "../styles/Home.css";
import { Box, Link, Button, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../redux/actions/authActions";
import store from "../redux/store";

const Home = React.memo(() => {
  useEffect(() => {
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      // console.log(decoded.exp)
      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(decoded));
      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds

      if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = "/login";
      }
    }
  }, []);
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  // Check for token to keep user logged in

  if (auth.isAuthenticated) {
    history.push("/dashboard");
  }
  return (
    <Fragment>
      <Navbar />
      <Box bg="blue.500">
        <Text
          fontSize="5xl"
          p="10"
          mb="5"
          fontWeight="bold"
          color="white"
          align="center"
        >
          Create and store the links to your favourite sites
        </Text>
      </Box>
      <Box bg="blue.600" p="10" color="white">
        <Text fontSize="3xl">Tired of storing links in the browser?</Text>
        <Text fontSize="3xl">
          Get a secure account for storing and visiting your favourite and most
          used sites easily.
        </Text>
      </Box>
      <Box bg="blue.600" p="10" mt={4} color="white">
        <Text fontSize="3xl">Sync across different devices</Text>
      </Box>

      <Box m="auto" w="50%">
        {" "}
        <Button bg="blue.400" m="2" p="2">
          <Link href="/login">Login </Link>
        </Button>
        <Button bg="blue.400" m="2" p="2">
          <Link href="/signin"> Create an account</Link>
        </Button>
      </Box>
    </Fragment>
  );
});
export default Home;
