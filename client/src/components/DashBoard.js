import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Heading, Flex, Box, Button, Center, Spacer } from "@chakra-ui/react";

import { logoutUser } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";

export default function DashBoard() {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Flex bg="blue.800" color="gold" p="5">
        <Box p="2" m="2" mt="4">
          <NavLink to="/view_links">View All </NavLink>
        </Box>

        <Box p="2" m="2" mt="4">
          <NavLink to="/add_Link">Add New </NavLink>
        </Box>

        <Box p="2" m="2" mt="4">
          <NavLink to="/settings">Settings</NavLink>
        </Box>
        <Spacer />
        <Box p="2">
          <Button className="logout-btn" onClick={() => dispatch(logoutUser())}>
            LOG OUT
          </Button>
        </Box>
      </Flex>
      <Center bg="blue.500" color="yellow.600">
        <Heading fontSize="2xl">Your DashBoard</Heading>
      </Center>
    </Fragment>
  );
}
