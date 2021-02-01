import React, { Fragment, useEffect, useState } from "react";
import Dashboard from "./DashBoard";
import Loading from "./Spinner";
import {
  Link,
  Center,
  Box,
  Button,
  Container,
  Flex,
  Divider,
  CloseButton,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAll, deleteLink } from "./../redux/actions/linkActions";

export function ViewLinks() {
  const items = useSelector((state) => state.links.items);
  console.log(items);
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Your Links";
    dispatch(fetchAll());
  });
  return (
    <Fragment>
      <Dashboard />
      <Center>
        {items.map((item, index) => (
          <Box>
            <Box as="h1" key={index + 1}>
              {item.title}
            </Box>
            <Divider />
            <Link
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.url}
            </Link>
            <br />
            <Button
              className="delete-btn"
              onClick={() => dispatch(deleteLink(item._id))}
            >
              <CloseButton />
            </Button>
          </Box>
        ))}
      </Center>
    </Fragment>
  );
}

export function Settings() {
  return (
    <Fragment>
      <h1>Change your username</h1>
    </Fragment>
  );
}
