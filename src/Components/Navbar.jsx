// import { Box, Button, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


// const links = [
//   {
//     path: "/",
//     title: "Home",
//   },
//   {
//     path: "/about",
//     title: "About",
//   },
//   {
//     path: "/skills",
//     title: "Skills",
//   },
//   {
//     path: "/projects",
//     title: "Projects",
//   },
//   {
//     path: "/contact",
//     title: "Contact",
//   },
// ];

export function Navbar() {
  return (
    <Flex
      gap="30px"
      alignItems="center"
      border="1px solid grey"
      height="80px"
      position="fixed"
      width="100%"
      justifyContent="flex-end"
      bg="black"
      zIndex={5}
    >
      <AnchorLink href="#home">
        <Button>Home</Button>
      </AnchorLink>
      <AnchorLink href="#about">
        <Button>About</Button>
      </AnchorLink>
      <AnchorLink href="#skills">
        <Button>Skills</Button>
      </AnchorLink>
      <AnchorLink href="#projects">
        <Button>Projects</Button>
      </AnchorLink>
      <AnchorLink href="#contact">
        <Button>Contact</Button>
      </AnchorLink>
    </Flex>
  );
}
