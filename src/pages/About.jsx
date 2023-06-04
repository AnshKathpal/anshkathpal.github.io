import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/react";
import myImg from "../Images/myImg.png";

export const About = () => {
  return (
    <Container
      color="black"
      bg="black"
      // border="2px solid blue"
      h="92vh"
      maxW="100%"
      id="about" className="about section"
    >
      <Text fontSize="40px" color="white" fontFamily="'Mogra', cursive">
        Let me help you know more...
      </Text>
      <Flex
        gap="20"
        alignItems="center"
        p={20}
        fontSize="24px"
        justifyContent="center"
        // border="1px solid blue"
        // data-aos="fade-right"
      >
        <Box
        //  height="100px"
        // borderRadius="50% 50% 50% 50%" border = "1px solid blue"
        >
          <img
            // style={{
            //   position: "relative",
            //   top : "-420px",
            // }}
            src={myImg}
            alt=""
          />
        </Box>
        <Flex
          flexDirection="column"
          data-aos="fade-down"
          // border="1px solid white"
          gap={10}
          color = "white"
        >
          <Text>
            A passionate and enthusiastic full stack web developer, eager to
            embark on my professional journey in the world of web development.
            As a fresh talent in the field, I bring a fresh perspective,
            boundless curiosity, and a strong foundation in the essential
            technologies.
          </Text>

          <Grid
            placeItems="center"
            p={5}
            h="max-content"
            gap={10}
            gridTemplateColumns="repeat(4,1fr)"
          >
            <GridItem>
              <img
                style={{ width: "30%", margin: "auto" }}
                src="https://img.icons8.com/pulsar-color/256/code-folder.png"
                alt=""
              />
              <Text fontSize="20px">1200+ Hours</Text>
              <Text fontSize="20px">Practical Coding</Text>
            </GridItem>
            <GridItem>
              <img
                style={{
                  width: "30%",

                  margin: "auto",
                }}
                src="https://img.icons8.com/external-filled-line-andi-nur-abdillah/256/external-Communication-hospital-(filled-line)-filled-line-andi-nur-abdillah.png"
                alt=""
              />
              <Text fontSize="20px">100+ Hours</Text>
              <Text fontSize="20px">Soft-Skills Development</Text>
            </GridItem>
            <GridItem>
              <img
                style={{
                  width: "30%",

                  margin: "auto",
                }}
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-soft-skills-recruitment-agency-flaticons-lineal-color-flat-icons-2.png"
                alt=""
              />
              <Text fontSize="20px">100+ Hours</Text>
              <Text fontSize="20px">DSA</Text>
            </GridItem>
            <GridItem>
              <img
                style={{
                  width: "30%",

                  margin: "auto",
                }}
                src="https://img.icons8.com/plasticine/256/idea.png"
                alt=""
              />
              <Text fontSize="20px">4+ Major Projects</Text>
              <Text fontSize="20px">30+ Mini Projects</Text>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Container>
  );
};
