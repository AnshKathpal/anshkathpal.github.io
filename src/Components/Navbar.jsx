// import { Box, Button, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled, { keyframes } from "styled-components";

import { ReactNode, useState } from "react";
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
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

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
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  const [isVisible4, setIsVisible4] = useState(true);
  const [isVisible5, setIsVisible5] = useState(true);

  const [style1, setStyle1] = useState("count1");
  const [style2, setStyle2] = useState("count1");
  const [style3, setStyle3] = useState("count1");
  const [style4, setStyle4] = useState("count1");
  const [style5, setStyle5] = useState("count1");

  const handleEnter1 = () => {
    setIsVisible1(!isVisible1);
    setStyle1("count2");
  };

  const handleLeave1 = () => {
    setIsVisible1(!isVisible1);
    setStyle1("count1");
  };

  const handleEnter2 = () => {
    setIsVisible2(!isVisible2);
    setStyle2("count2");
  };

  const handleLeave2 = () => {
    setIsVisible2(!isVisible2);
    setStyle2("count1");
  };

  const handleEnter3 = () => {
    setIsVisible3(!isVisible3);
    setStyle3("count2");
  };

  const handleLeave3 = () => {
    setIsVisible3(!isVisible3);
    setStyle3("count1");
  };

  const handleEnter4 = () => {
    setIsVisible4(!isVisible4);
    setStyle4("count2");
  };

  const handleLeave4 = () => {
    setIsVisible4(!isVisible4);
    setStyle4("count1");
  };

  const handleEnter5 = () => {
    setIsVisible5(!isVisible5);
    setStyle5("count2");
  };

  const handleLeave5 = () => {
    setIsVisible5(!isVisible5);
    setStyle5("count1");
  };

  return (
    <NavDiv>
      <Flex
        gap="30px"
        alignItems="center"
        border="1px solid grey"
        height="90px"
        position="fixed"
        width="100%"
        justifyContent="flex-end"
        pr={5}
        bg="black"
        zIndex={5}
      >
        <AnchorLink href="#home">
          {isVisible1 ? (
            false
          ) : (
            <Box
              // border="1px solid white"
              // bg="white"
              bgGradient="linear-gradient(white,black)"
              width="90px"
              top="-8px"
              left="7.5px"
              position="relative"
              height="80px"
              clipPath="polygon(45% 0%,50% 0%, 100% 100%, 0% 100%)"
              // zIndex={5}
            ></Box>
          )}
          <Checking1>
            <Button
              variant="solid"
              bg="black"
              color="white"
              className={style1}
              // height="max-content"
              onMouseEnter={handleEnter1}
              onMouseLeave={handleLeave1}
              _hover={{ background: "none", color: "rgb(31,229,222)" }}
            >
              Home
            </Button>
          </Checking1>
        </AnchorLink>
        <AnchorLink href="#about">
          {isVisible2 ? (
            false
          ) : (
            <Box
              // border="1px solid white"
              // bg="white"
              bgGradient="linear-gradient(white,black)"
              width="90px"
              top="-8px"
              left="7.5px"
              position="relative"
              height="80px"
              clipPath="polygon(45% 0%,50% 0%, 100% 100%, 0% 100%)"
            ></Box>
          )}
          <Checking2>
            <Button
              variant="solid"
              bg="black"
              color="white"
              className={style2}
              onMouseEnter={handleEnter2}
              onMouseLeave={handleLeave2}
              _hover={{ background: "none", color: "rgb(31,229,222)" }}
            >
              About
            </Button>
          </Checking2>
        </AnchorLink>
        <AnchorLink href="#skills">
          {isVisible3 ? (
            false
          ) : (
            <Box
              // border="1px solid white"
              // bg="white"
              bgGradient="linear-gradient(white,black)"
              width="90px"
              top="-8px"
              left="7.5px"
              position="relative"
              height="80px"
              clipPath="polygon(45% 0%,50% 0%, 100% 100%, 0% 100%)"
            ></Box>
          )}
          <Checking3>
            <Button
              variant="solid"
              bg="black"
              color="white"
              className={style3}
              onMouseEnter={handleEnter3}
              onMouseLeave={handleLeave3}
              _hover={{ background: "none", color: "rgb(31,229,222)" }}
            >
              Skills
            </Button>
          </Checking3>
        </AnchorLink>
        <AnchorLink href="#projects">
          {isVisible4 ? (
            false
          ) : (
            <Box
              // border="1px solid white"
              // bg="white"
              bgGradient="linear-gradient(white,black)"
              width="90px"
              top="-8px"
              left="7.5px"
              position="relative"
              height="80px"
              clipPath="polygon(45% 0%,50% 0%, 100% 100%, 0% 100%)"
            ></Box>
          )}
          <Checking4>
            <Button
              variant="solid"
              bg="black"
              color="white"
              className={style4}
              onMouseEnter={handleEnter4}
              onMouseLeave={handleLeave4}
              _hover={{ background: "none", color: "rgb(31,229,222)" }}
            >
              Projects
            </Button>
          </Checking4>
        </AnchorLink>
        <AnchorLink href="#contact">
          {isVisible5 ? (
            false
          ) : (
            <Box
              // border="1px solid white"
              // bg="white"
              bgGradient="linear-gradient(white,black)"
              width="90px"
              top="-8px"
              left="7.5px"
              position="relative"
              height="80px"
              clipPath="polygon(45% 0%,50% 0%, 100% 100%, 0% 100%)"
            ></Box>
          )}
          <Checking5>
            <Button
              variant="solid"
              bg="black"
              color="white"
              className={style5}
              onMouseEnter={handleEnter5}
              onMouseLeave={handleLeave5}
              _hover={{ background: "none", color: "rgb(31,229,222)" }}
            >
              Contact
            </Button>
          </Checking5>
        </AnchorLink>
      </Flex>
    </NavDiv>
  );
}

const textfade = keyframes`
  
  0% {
    opacity : 0;
    transform : 'translateY(-20px)';
  }

  100% {
    opacity : 1;
    transform : 'translateY(0px)'
  }

`;

const NavDiv = styled.div`
  animation-name: ${textfade};
  animation-duration: 2s;
`;

const Checking1 = styled.span`
  .count1 {
    /* border: 1px solid blue; */
  }

  .count2 {
    /* border : 1px solid red; */
    position: relative;
    top: -40px;
    left: 6.7px;
  }
`;
const Checking2 = styled.span`
  .count1 {
    /* border: 1px solid blue; */
  }

  .count2 {
    /* border : 1px solid red; */
    position: relative;
    top: -40px;
    left: 6.7px;
  }
`;
const Checking3 = styled.span`
  .count1 {
    /* border: 1px solid blue; */
  }

  .count2 {
    /* border : 1px solid red; */
    position: relative;
    top: -40px;
    left: 6.7px;
  }
`;
const Checking4 = styled.span`
  .count1 {
    /* border: 1px solid blue; */
  }

  .count2 {
    /* border : 1px solid red; */
    position: relative;
    top: -40px;
    left: 6.7px;
  }
`;
const Checking5 = styled.span`
  .count1 {
    /* border: 1px solid blue; */
  }

  .count2 {
    /* border : 1px solid red; */
    position: relative;
    top: -40px;
    left: 6.7px;
  }
`;
