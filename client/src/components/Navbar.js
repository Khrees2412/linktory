import React, { Fragment } from "react";
import { Link, Text, Flex, Box, HStack, Spacer } from "@chakra-ui/react";
export default function Navbar() {
  return (
    <Fragment>
      <Flex bg="blue.500" p="5" justify="around">
        <Box>
          <Text fontSize={["2xl", "4xl"]} fontWeight="bold" color="gold">
            LINKTORY
          </Text>
        </Box>
        <Spacer />
        <HStack spacing={[5, 10]} color="yellow.400">
          <Box>
            <Link href="/">Use-cases</Link>
          </Box>
          <Box>
            <Link href="/">About</Link>
          </Box>
          <Box>
            <Link href="/login">Login</Link>
          </Box>
        </HStack>
      </Flex>
    </Fragment>
  );
}
