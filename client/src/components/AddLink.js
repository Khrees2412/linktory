import React, { Fragment, useState } from "react";
import {
  Center,
  Input,
  InputGroup,
  Box,
  Button,
  Container,
  Flex,
  useToast,
} from "@chakra-ui/react";
import Dashboard from "./DashBoard";
import { useDispatch } from "react-redux";
import { createNew } from "./../redux/actions/linkActions";

export default function AddLink() {
  const toast = useToast();
  const [items, setItems] = useState({
    url: "",
    title: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setItems({
      ...items,
      [e.target.name]: e.target.value,
    });
  };
  const { url, title } = items;

  const handleClick = () => {
    if (!url || !title) {
      toast({
        title: "Please fill both input fields",
        //  description: "We've created your account for you.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    } else {
      const data = {
        url,
        title,
      };
      dispatch(createNew(data));

      setItems({
        url: "",
        title: "",
      });

      toast({
        title: "Link Added",
        //  description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  // const addLink = (title,url) => {
  //   const newItems = [...items,{title,url}];
  // setItems(newItems)}
  return (
    <Fragment>
      <Dashboard />
      <Center>
        <Flex direction="column" mx="4" w={["75%", "75%", "50%"]} p="5">
          <Box className="title">
            <label htmlFor="Title">Title</label>
            <Input
              name="title"
              type="text"
              maxLength="100"
              placeholder="Must not be more than 50 characters long "
              value={title}
              onChange={handleChange}
              id="Title"
            />
          </Box>

          <Box className="link">
            <label htmlFor="Url">Url</label>
            <InputGroup>
              <Input
                name="url"
                type="url"
                placeholder="Must begin with 'https' or 'http'
            "
                value={url}
                onChange={handleChange}
                id="Url"
              />
            </InputGroup>
          </Box>
          <Button
            p="3"
            mt="2"
            bg="blue.700"
            color="white"
            type="submit"
            onClick={handleClick}
          >
            ADD
          </Button>
        </Flex>
      </Center>
    </Fragment>
  );
}
