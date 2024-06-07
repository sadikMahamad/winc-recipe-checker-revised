import React from 'react';
import { Input } from "@chakra-ui/react";

export const SearchInput = ({ changeFn, ...props }) => {
  return (
    <Input
      id="search"
      name="search"
      variant={"filled"}
      focusBorderColor="gray"
      _focus={{ background: "white" }}
      fontSize={"sm"}
      textAlign={"left"}
      color="darkgray.400"
      fontStyle={"regular"}
      placeholder="Search for a recipe"
      _placeholder={{ color: "darkgray.400" }}
      _hover={{ background: "lightgray.400" }}
      onChange={changeFn}
      {...props}
    ></Input>
  );
};

