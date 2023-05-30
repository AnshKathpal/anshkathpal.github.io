import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { TextSpan } from "../Components/TextSpan";
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
      border="2px solid red"
      h="100vh"
      maxW="100%"
    >
      <Box color="white">
        <Text className="my-text" ml="60px" fontSize="60px">
          {/* Hi, <br /> I'm Ansh Kathpal <br /> A Full Stack Web Developer */}
          {sentence1.map((letter, index) => {
            return <TextSpan key={index}>{letter === " "? "\u00A0" : letter}</TextSpan>;
          })}
          <br/>
          {sentence2.map((letter, index) => {
            return <TextSpan key={index}>{letter === " "? "\u00A0" : letter}</TextSpan>;
          })}
          <br/>
          {sentence3.map((letter, index) => {
            return <TextSpan key={index}>{letter === " "? "\u00A0" : letter}</TextSpan>;
          })}
        </Text>
      </Box>
    </Container>
  );
};
