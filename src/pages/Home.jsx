import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  Image,
  color,
} from "@chakra-ui/react";
import { FaArrowCircleDown } from "react-icons/fa";
import React from "react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { TextSpan } from "../Components/TextSpan";
import image1 from "../Images/img2.png";

import styled, { keyframes } from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Home = () => {
  const sentence1 = "Hi,".split("");
  const sentence2 = "I'm Ansh Kathpal".split("");
  const sentence3 = "A Passionate Full Stack Web Developer".split("");

  return (
    <Container
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      textAlign="left"
      id="home"
      color="white"
      bg="black"
      h="92vh"
      maxW="100%"
    >
      <Flex width="100%" flexDirection="column">
      <DevImageWrapper  >
            <img width="100%" src={image1} alt="" />
          </DevImageWrapper>
        <DivText>
          <Flex flexDirection="column" color="white" width="fit-content">
            <Text
              className="my-text"
              width="fit-content"
              ml="60px"
              fontSize="60px"
            >
              {/* Hi, <br /> I'm Ansh Kathpal <br /> A Full Stack Web Developer */}
              {sentence1.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
              <br />
              {sentence2.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
              <br />
              {sentence3.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </Text>
            <Flex
              position="relative"
              width="fit-content"
              left={20}
              top={10}
              gap={30}
              justifyContent="flex-start"
            >
              <img
                style={{ width: "9%", height: "45px", borderRadius: "50%" }}
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt=""
              />
              <img
                style={{ width: "9%", height: "45px" }}
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                alt=""
              />
              <img
                style={{ width: "9%", height: "45px" }}
                src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/message-circle-blue-512.png"
                alt=""
              />
              <AnchorLink href="#about">
                <Button
                  _hover={{ bg: "black", border: "1px solid aqua" }}
                  rightIcon={<ArrowDownIcon />}
                  h="45px"
                  color="white"
                  bg="black"
                  variant="outline"
                >
                  More About Me
                </Button>
              </AnchorLink>
              <Button
                _hover={{ bg: "black", border: "1px solid aqua" }}
                h="45px"
                color="white"
                bg="black"
                variant="outline"
              >
                Resume
              </Button>
            </Flex>
          </Flex>

          <Flex
            top={60}
            position="relative"
            justifyContent="space-between"
            width="100%"
            // border="1px solid red"
          >
            <ScrollDiv>
              <div>
                <h1>S</h1>
                <h1>c</h1>
                <h1>r</h1>
                <h1>o</h1>
                <h1>l</h1>
                <h1>l</h1>
              </div>
              <div>
                <img
                  style={{ height: "100px" }}
                  src="https://cdn.pixabay.com/photo/2014/04/03/10/29/arrow-310629_960_720.png"
                  alt=""
                />
              </div>
            </ScrollDiv>
            <ScrollDiv>
              <div>
                <img
                  style={{ height: "100px" }}
                  src="https://cdn.pixabay.com/photo/2014/04/03/10/29/arrow-310629_960_720.png"
                  alt=""
                />
              </div>
              <div>
                <h1>S</h1>
                <h1>c</h1>
                <h1>r</h1>
                <h1>o</h1>
                <h1>l</h1>
                <h1>l</h1>
              </div>
            </ScrollDiv>
          </Flex>
        </DivText>
      </Flex>
    </Container>
  );
};

const textfade = keyframes`
  
  0% {
    opacity : 0;
    transform : translateY(-20px)
  }

  100% {
    opacity : 1;
    transform : translateY(0px)
  }

`;

const Welcome = keyframes`
0% {
  opacity : 0;
  transform : translateY(-20px)
}

50%{
  opacity : 1;
  transform : translateY(0px)
}

100% {
  opacity : 0;
  transform : translateY(0px)
}
`;

const WelcomeMessage = styled.div`
  animation-name: ${Welcome};
  animation-duration: 2s;
`;

const DivText = styled.span`
  animation-name: ${textfade};
  animation-duration: 2s;
`;

const JumpScroll = keyframes`
  0% {
    transform: translateY(-10px)
  }

  100% {
    transform: translateY(10px)
  }
`;

const ScrollDiv = styled.div`
  border: "1px solid red";
  display: flex;
  animation-name: ${JumpScroll};
  animation-duration: 1s;
  animation-iteration-count: 100000;
  animation-timing-function: ease-in-out;
`;

const Reflect = styled.span`
  -webkit-box-reflect: below;
`;

const JumpingText = keyframes`
0% {
    transform: translateY(-10px)
  }

  100% {
    transform: translateY(-10px)
  }
`;

const Jumping = styled.div`
  /* border: "1px solid red"; */
  display: inline-block;
  animation-name: ${JumpingText};
  animation-duration: 4s;
  animation-iteration-count: 10;
  /* animation-timing-function: ease-in-out; */
`;

const DevImage = keyframes`
  0% {
    transform: translateX(30px)
  }

  100% {
    transform: translateX(0px)
  }
`;

const DevImageWrapper = styled.div`

display : flex;
position : absolute;
right : 0px;
  animation-name: ${DevImage};
  animation-duration: 2s;
`;
