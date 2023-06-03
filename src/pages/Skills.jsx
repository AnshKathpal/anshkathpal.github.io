import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { TextSphere } from "../Components/TextSphere";
import { TextSpan } from "../Components/TextSpan";
import globe from "../Images/globeWhite.png";
import styled from "styled-components";

export const Skills = () => {
  return (
    <Container
      id="skills"
      color="white"
      bg="black"
      border="2px solid green"
      h="92vh"
      maxW="100%"
    >
      <Text fontSize="40px" fontFamily="'Mogra', cursive">
        Time to showcase some skills!
      </Text>
      {/* <Flex> */}
      <Flex
        mt={10}
        flexDirection="column"
        gap={10}
        border="1px solid red"
        position="absolute"
        right={0}
        justifyContent="center"
        // width="50%"
        height="700px"
      >
        <Text fontSize="30px" fontFamily="'Mogra', cursive">
          Tech Stacks
        </Text>
        <GlobeDiv>
          <img src={globe} alt="" />
          <TextSphere />
        </GlobeDiv>
        {/* </Flex> */}
      </Flex>
    </Container>
  );
};

const GlobeDiv = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  height : 100%;
  /* position: relative; */
  /* left : 30%; */
  /* justify-content : space-between; */

  img {
    border : 1px solid purple;
    /* width: 120%; */
    position : relative;
    left  : 30%;
  }
`;
