import { Box, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import hv1 from "../Images/hv1.png";
import hv2 from "../Images/hv2.png";
import Tiny1 from "../Images/Tiny1.png";
import Tiny2 from "../Images/Tiny2.png";
import Cath1 from "../Images/Cath1.png";
import Cath2 from "../Images/Cath2.png";
import styled from "styled-components";

export const Projects = () => {
  return (
    <Container
      id="projects"
      color="white"
      bg="black"
      border="2px solid yellow"
      // h="92vh"
      maxW="100%"
    >
      <Text fontSize="40px" fontFamily="'Mogra', cursive">
        Keep an eye on my Work!
      </Text>
      <Grid
        m="50px auto"
        gap="30px"
        // border="1px solid red"
        width="80%"
        height="max-content"
        gridTemplateColumns="repeat(1,1fr)"
      >
        <MainDiv
          // borderRadius="10%"
          // // border="2px solid green"
          // width="100%"
          // height="600px"
          // // bg="rgb(24,25,35)"
          // bg = "transparent"
          // position="relative"
          // border = "none"
          // outline = "none"
          className="maindiv"
        >
          <Grid
            // border="1px solid blue"
            height="100%"
            gridTemplateColumns="repeat(2,1fr)"
          >
            <GridItem
              //  border="1px solid pink"
              // border="1px solid white"
              className="box"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                // border="1px solid white"
                height="100%"
                flexDirection="column"
                className="content"
              >
                <img
                  className="shine"
                  style={{
                    width: "70%",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                  }}
                  src={hv1}
                  alt=""
                />

                <img
                  style={{
                    width: "70%",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                  }}
                  src={hv2}
                  alt=""
                />
              </Flex>
            </GridItem>
            <GridItem
              // border="1px solid blue"
              ml={-20}
              p={10}
            >
              <Flex
                //  border="1px solid green"
                flexDirection="column"
                justifyContent="center"
                height="100%"
                gap={30}
              >
                <Text
                  color="white"
                  fontFamily="'Mogra', cursive"
                  fontSize="30px"
                >
                  HealthIV
                </Text>
                <Text color="white">
                  HealthIV, the digital healthcare company focused on improving
                  home health outcomes through technology, now brings its
                  in-home infusion therapy services to the Los Angeles Metro
                  Area. Helmed in Los Angeles by Shawn Ankari, HealthIV's
                  Co-Founder and Business Development Director, HealthIV's new
                  availability for Angelenos is part of the company's ongoing
                  dedication to changing up the home healthcare space by
                  focusing on full digital interoperability between patients,
                  doctors, pharmacists, and home healthcare workers.
                </Text>
                <Flex
                  // border="1px solid white"
                  height="50px"
                  alignItems="center"
                  gap={4}
                  justifyContent="center"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO3ZW2xMQRgH8L+oJogHxAPxghc8iMsDbyWoiHQ7s7UlrkFtUQ0pIUKIS0IqEtdQQVwiLhFEJG4JD3WL4EG0IajbnnO2u92DaovSjmxX9HycadeZYRPZL5lkk8k5Z357vpn5dhZIRzrS8f+GwVFncohUNoPho3cAw4uUAzieqwDupBpgctz2DDA5zqsOQBT/eWuYR+5xTgWwPxWAujnkHmWeAQbHxlQAameRSbxBBVCcCsD7GQSw2DPAYshPBcCe1nq9xRHwDsjFaNnArBndhW3b7bakYtNAAohOdTyLIcszwGQYJP12J2cIOxbTA1jViwCqA44U8mOgZ0CIoWdb6WFbIXVAc7MQSzIIwMprfcabAHp4Bgigg8HQKAPEqirVAfU2GXxzEZnAjfExQCVMDkMKqLhLBmsV9lOexN8WkvwPKQ2+BcDwUAq4f5UCSoYrAxoLCeCBDsBlGaCm/AwBhNeOUwZ8mk9S6JIywGA4IgVcOUQA1aX5yoD6uQ4Ax2EdgK0yQPT8dvVJfGM7AXycTQClygCTY7kUcGKDOuDSegL4MNPxDD+W6QDMkgEih5arA86WEMC76QQwUxlg+DFBCtgdVAccn0sANY4ywmDIVgaE8jDMSxEnncT3jlHAAT/pj+S3XhvKxVBlwGsf+mgFPL5IAbvGkv6wo4yIcPRWBogsZBgMTW6Dq16dRdIlevNc+4CqWxRQOoL0O1agZhFEJ+gIk6PGDRBeMoQAah6Vtw8IV1LA+gE/+5oWkWuj0BUGR6UbwJrXlwBioZcivC5bWIHM3wFLM4XYN0mIhnfSUvrrAvIGKnQCbrjm+NQuritP7G2ViF7YJcJrxgixJ1uIOwcTVadbLO30E/A5SFag6zoBp2ST1I5Y3pfRL3UkvRoKSCF3UhvAZNgp3Y3PbmtJnT8GxFOpfK/8OIVhh07AmjaXy7yOIrxilIic3ixir57KAfE0undUiLKcxJwo/uU4xVEHmQyrtQEMhvlJr/0OjP3qiRD1sTYHLWTHKRwFOgG5njayyRm//d5N9jglxOHTBghzjNK2E8t+Si6CiDhOIywfRuoD+NH/bwAaCxP1f3SKyx6Tg37aANZ4dNUBaCqC+FSQKJmdNY/ptkmOR1fojJa3wBA0OE4bHLXJAr4EE4e1UUeV6doYGkyGawbHStOHwfib8SaAziE/xpkMW0yO+17fjpH4B6gsfv4Z9aEbUhVJv51/+S2rvB2TYeKP3ftZS4t/ZpgY7/N843SkIx3/Z3wHrTGmPWk4PzUAAAAASUVORK5CYII="
                    alt=""
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEElEQVR4nO3YSUwUQRQA0J5qF4zx4JK4HEz04HrRg3G5aIxr4nJRb+pFOelBYaoaVDSgkcUVN0Qxbgfxoh5QYKp6RBQXkIjKMuAoiAziMKCCKCiU6THQXTgtM12lk5j5SSVkuqu7Hr+2LkmKRCQi8f8GQKQdIELDWiBusw6AxB12AMKvODKAH4YdAEmRZYAN4pu8DZDPNYRejlb21bchcsM6AOHMsAAOvdABEJ/lyUBSOAAgucyQAZxoGQAQ2R4WwIGnhjGAt1kHQLIhLIDEx3p9hay3DJCQY5FZw6alPqAtLS0DlmBizOVGFpHwoO89kl1daB0A86ebAcYm3hMC6KGUDjnfLwO7C3VAnHOadYDiGG0GGBKnUp+PH/Cxs/v3LhTn1AE7ckdZB0jUBhDuMkO88Xi5AbVtP1jA2XrDO3CX1gYOgH8mahA5iKdmNzGAMl8Xe8/pN4YZiLzjarwfAEmpSMD8W14GUODpZLvPCbex/lNugA3hXJGAVbk+BnCr9it7zzGXYRUmd/gBEF8SCdjsZMfFpeov7D2Hyw2rMLkoIgNpwTY21eEKeRAff9HOAlKeGzKAU7kBAJLYYAEJOZUhAxJLP7Nj4GCpcRaK4QcgsilYwM6bL0MGxD76xAKSivVn2slGboAM1eXBAqKvPw8ZsKWglQXse6iPH4Us4wZIyDFb5CC+WtPBANY5fOw9e+731ZVinbP4Afb8CSIBOW+/MoClOc1sBuLv6oD4gvH8gL3OQQCS7kCNm5nG7kgLqxoGBBS972QAc2580K9nvqNAUXsHcI8UXTKYH/BrJmoOBJh4oJABlLgbBwRUtH5nAFOym/TrGXXGGcgrpPF+ACIVgQAj995lALWNXro8s5hGxeu7yd7GDcvy0NW5Ptra2c0Axl3RvwXAqdf68yEpFwawQeIMBBhssqV+7fHSkwWv6OIzT+iK2830gusLbfnGNrw3orI8egbSq42rsCoOgHC22SCtb2q2vJ1u/97DdrEjhuMUSK6JA0CcbgY4olb/8bvALLSulFHRbxuRZjhOQfi4MABAZPefpkqtKy048Zgm57uoq77JFKB1oys1HXRtns8/JuT+X2IpzwxjAO8SB4Bka7DzvhFTVf+B+gZotGx2nILwFmEAGalrrSxi2nfz0CyLxyl2skYYQILOeaJWYtNypo7dRijqXHEAxTFZOEBbdU+6qZxS9uscSGHrSTF5k8QBYvKGCwFk1FH5aBUF+4spMCx2IEDR3ikJDS0Lihptg+Q6QPhz0Ij0GgqSn1E5Qe8egQvusEHiAApGUhyeIf3V2FE0TFYcS2yQJAOIS6xmB0Di1o7P/eef9vsjpLBF0Nn5l/9lnuxAvNK/ekNcoxXtb+037Zrl50YiEpH4P+Mn9Q+e3CSBSHQAAAAASUVORK5CYII="
                    alt=""
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nGNgGAWjYBSMgkEJvt+X+z+YMMOoB+6PxsD/0SREChjoJPN9NBPfH/hQ/z5ajN4f+JD/PlqR3R8cmIFUMNAO/j7qgfsDH+rfR5PQfUpCjBGOl04VQZE7s1Pyf6gv939xUZb/LMyM/yXFWf5HBvD8P7tTcvB7YPtSsf8c7Ewo8gxQzMXJBJYftB74elfuv4IsK1ycnY3pv4YKG5iGiZkasP//dm+QeuDkNgm4GBMT4//TOyBJ5tZRqf9K8qz/cxL5/r++Kjt4Y2DXCnG4GCgZfbyFcOy769gdPqg8cPuYNIq4rxvX/5tHpIg0bxB4AIRd7ThR5DjYmf4nhvP+v7xfamh44N4J6f/62uwYJRAzMyPYI28Gcx6AYZAjy7L5//NwYRanOups/59fkBncHoDhp+dk/jeXCfwXE2FBUZ8VzzewHgCV9/g8gF7Ov7gkAy7/YeplJFno5wFQKeLjwvV/3VxRuNjVA1IoHliLJDe3T/i/kS47RnnfXSsIV8/GykQfDyyeLAKu/mGlSU4S3/+JzUL/LU04UDwAavuA1IPaPzAxe0vO/3eOS4PFn1+U+W9rjtADqq3p4oFL+6TgHsCFVRRY4Ummpx4RyiDMyMj4X0qCBaUpAcKlWfz0S0I7l4v95+Nhxup4UFLYugTROAN5pCJHAK+Hbcw4sBalNPMACD84Jf0/O4Hvv6wUK7g8BzWTAz25/x/fLIFV/aH1Ev/D/Xn+qylBGnIC/Mxgh09pE/r/+TauUo2GHqAHZhj1wP3RGPhP1yQ0CkbBKBgFDPQAANX6rlnxM/hBAAAAAElFTkSuQmCC"
                    alt=""
                  />
                  <img
                    style={{ width: "8%", height: "90%" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
                    alt=""
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEnklEQVR4nO1ZTYwVRRAeWcFooib+JBoxJuQtTveTmIgQPBhOelHgZDB4YA9evJusITF7EMVw8CDq+kJYNctUjc1O9WOBvRIB48kYCcaLrhFIFGTxYow/wJqaN/B63rx9090zi5q8SjrZ7MxUfdVdXfVVvSAYylCGUl2UGgkpekpo3CU0JILgG0F4WWj8K12ElyXhmfSZxl1hEm8KJiZWBP+2NDU+LAjelgTnpcZFlyU0nhMa9qxLplffdOANpe4XGlpCw5+uwIuOAOuYXDsb3XdTwEuNO4SGhQIQwp8FwZQk2PlYG55kQFKpVbz4b/4fPxMEH/G7fZy5FCbxi8sGfH2rtVIS7i8YJjjR1NGWzceP32qri9+VbdgqNJ7ssxEfsq16wc/O3iE1zPXE8PdhAs9V1d0kfF4SzOc3BY+xzfp2vggeHm2376zFQBAErEtqwJ7TOFrLSfQJmzeq6YM3ZVvJwoPFxVtYd4+tySq2ApnEL9UKXsNeDo/B72DOCaFxe5VUuWCGjS9w3l1B+I4kuBYm8RNl70qC2LgPv4T0yb3ONjnPmxfWO+Y74N/Ncn5ifSfIuNiE77tXWKNIeWebNK7hg0zPVXEYmvYYoi1Gqv7DqWKn9MDI817gJyZW5E6RIHJVITScMir2HruvlBoxuQ3vhA94qfGAAf5vMRONuqqRbdhq6DhrRQCZVZr0wKXCpqLUiND4cU/2OhB4yPpWa6XQeKEbDdHG0o+Y7hpeT7mDh4O9ZE3MHHzExwGW3GYQvhaUCWcKI/53Bi78plhNOYO9F1QQqXHMiIhD5R8Qnrn+ATNI66MmPLQE7+cdHB+0Qoo2L6W7mcQbjBM4XQrGLF42HD2lzITk3Q8QfiWVemBQQTWLmo0D3SZFqVUW4LUveEnw2Rql7h5kozE3d5tZD2pzgJ8JwsMVdn52tVK3l+HxccAqhELCtWWx3VnwZRE8TNmm54ZrCPlc4iWdTKYfZKN5B2AvUwxbHU2PS+yVRpfgQd1GiOCa0PjqsqdRUaWQmXoIXzF2/Uqoo5e99OhcVR8v/YCHTpWoBBudiUYF4W8Z+N+Z01RoZy/e4GVJvMGSReK5G147Gs8q8hfZBvwqND4deIog3GZEw4/W0zymrkYlPeliVGp8PeNAPzWT+HFf8CyC4HMDx1uBrXDzYNYDW0rNWaszD4Xv1s1Ea4IKIg0qzfl/9Ih6yE2BxklDwXxZS8lFSWj8towa2EhjbvouSfCDwWj3OStJR4MaLxmZBAfl77TvtaAGpbKYjlc+NexelErd46WLZ5U2Y5UwgWeYE9lQgzKRGnbn+VL8QiWFPKssONFzEk3CZ33SbZ/Ct7vOXsIc6h7rYZFxnaPFBsd8LmzSuD9SeVNyw92iE/NeDX+/bEPdC3sdfG3D3XxVNDJT19gpBuEyiM06uG1mnjfDprad7yc8qywyzNTwhYy3jPX7gSNjlWOdd7r0QJrZpuqFtRWeVfK4jwuMdzdmFCmhYZ93qqwiXB2ZdvDQyb0jg7NMD5wr7LIIT+Io2shzm3Q6QXiaO7t0JtRZC4Lw62xyMZ6yyv/Cz6xDGUrw/5d/AJWWyz/FX3s8AAAAAElFTkSuQmCC"
                    alt=""
                  />
                </Flex>
                <Flex
                  justifyContent="center"
                  gap="10%"
                  alignItems="center"
                  //  border="1px solid white"
                >
                  <Text>Visit The Website</Text>
                  <Box
                    //  border="1px solid red"
                    width="7%"
                  >
                    <img
                      src="https://www.svgrepo.com/show/331495/netlify.svg"
                      alt=""
                    />
                  </Box>
                </Flex>
                <Flex
                  justifyContent="center"
                  gap="10%"
                  alignItems="center"
                  //  border="1px solid white"
                >
                  <Text>Visit GitHub</Text>
                  <Box
                    //  border="1px solid red"
                    width="7%"
                  >
                    <img
                      style={{ borderRadius: "50%" }}
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt=""
                    />
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </MainDiv>
        {/* <GridItem
          borderRadius="10%"
          border="1px solid green"
          width="100%"
          height="600px"
        /> */}

        <MainDiv
          // borderRadius="10%"
          // // border="2px solid green"
          // width="100%"
          // height="600px"
          // // bg="rgb(24,25,35)"
          // bg = "transparent"
          // position="relative"
          // border = "none"
          // outline = "none"
          className="maindiv"
        >
          <Grid
            // border="1px solid blue"
            height="100%"
            gridTemplateColumns="repeat(2,1fr)"
          >
            <GridItem
              //  border="1px solid pink"
              // border="1px solid white"
              className="box"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                // border="1px solid white"
                height="100%"
                flexDirection="column"
                className="content"
              >
                <img
                  className="shine"
                  style={{
                    width: "70%",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                  }}
                  src={Tiny1}
                  alt=""
                />

                <img
                  style={{
                    width: "70%",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                  }}
                  src={Tiny2}
                  alt=""
                />
              </Flex>
            </GridItem>
            <GridItem
              // border="1px solid blue"
              ml={-20}
              p={10}
            >
              <Flex
                //  border="1px solid green"
                flexDirection="column"
                justifyContent="center"
                height="100%"
                gap={30}
              >
                <Text
                  color="white"
                  fontFamily="'Mogra', cursive"
                  fontSize="30px"
                >
                  Tiny Toes (First Cry Clone)
                </Text>
                <Text color="white">
                  Tiny toes is basically a clone website for firstcry.com. This
                  website is responsible for providing the best baby faishon
                  products and accessories all over the India. Explore kids and
                  baby products galore at FirstCry.com, the Big Store for Little
                  Ones. We at FirstCry.com empathize with you as a mother who
                  always aspires to bestow her newborn, infant, baby or kid with
                  the best things even for their smallest needs. That is why,
                  'Mommy Knows Best'.
                </Text>
                <Flex
                  // border="1px solid white"
                  height="50px"
                  alignItems="center"
                  gap={4}
                  justifyContent="center"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO3ZW2xMQRgH8L+oJogHxAPxghc8iMsDbyWoiHQ7s7UlrkFtUQ0pIUKIS0IqEtdQQVwiLhFEJG4JD3WL4EG0IajbnnO2u92DaovSjmxX9HycadeZYRPZL5lkk8k5Z357vpn5dhZIRzrS8f+GwVFncohUNoPho3cAw4uUAzieqwDupBpgctz2DDA5zqsOQBT/eWuYR+5xTgWwPxWAujnkHmWeAQbHxlQAameRSbxBBVCcCsD7GQSw2DPAYshPBcCe1nq9xRHwDsjFaNnArBndhW3b7bakYtNAAohOdTyLIcszwGQYJP12J2cIOxbTA1jViwCqA44U8mOgZ0CIoWdb6WFbIXVAc7MQSzIIwMprfcabAHp4Bgigg8HQKAPEqirVAfU2GXxzEZnAjfExQCVMDkMKqLhLBmsV9lOexN8WkvwPKQ2+BcDwUAq4f5UCSoYrAxoLCeCBDsBlGaCm/AwBhNeOUwZ8mk9S6JIywGA4IgVcOUQA1aX5yoD6uQ4Ax2EdgK0yQPT8dvVJfGM7AXycTQClygCTY7kUcGKDOuDSegL4MNPxDD+W6QDMkgEih5arA86WEMC76QQwUxlg+DFBCtgdVAccn0sANY4ywmDIVgaE8jDMSxEnncT3jlHAAT/pj+S3XhvKxVBlwGsf+mgFPL5IAbvGkv6wo4yIcPRWBogsZBgMTW6Dq16dRdIlevNc+4CqWxRQOoL0O1agZhFEJ+gIk6PGDRBeMoQAah6Vtw8IV1LA+gE/+5oWkWuj0BUGR6UbwJrXlwBioZcivC5bWIHM3wFLM4XYN0mIhnfSUvrrAvIGKnQCbrjm+NQuritP7G2ViF7YJcJrxgixJ1uIOwcTVadbLO30E/A5SFag6zoBp2ST1I5Y3pfRL3UkvRoKSCF3UhvAZNgp3Y3PbmtJnT8GxFOpfK/8OIVhh07AmjaXy7yOIrxilIic3ixir57KAfE0undUiLKcxJwo/uU4xVEHmQyrtQEMhvlJr/0OjP3qiRD1sTYHLWTHKRwFOgG5njayyRm//d5N9jglxOHTBghzjNK2E8t+Si6CiDhOIywfRuoD+NH/bwAaCxP1f3SKyx6Tg37aANZ4dNUBaCqC+FSQKJmdNY/ptkmOR1fojJa3wBA0OE4bHLXJAr4EE4e1UUeV6doYGkyGawbHStOHwfib8SaAziE/xpkMW0yO+17fjpH4B6gsfv4Z9aEbUhVJv51/+S2rvB2TYeKP3ftZS4t/ZpgY7/N843SkIx3/Z3wHrTGmPWk4PzUAAAAASUVORK5CYII="
                    alt=""
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEElEQVR4nO3YSUwUQRQA0J5qF4zx4JK4HEz04HrRg3G5aIxr4nJRb+pFOelBYaoaVDSgkcUVN0Qxbgfxoh5QYKp6RBQXkIjKMuAoiAziMKCCKCiU6THQXTgtM12lk5j5SSVkuqu7Hr+2LkmKRCQi8f8GQKQdIELDWiBusw6AxB12AMKvODKAH4YdAEmRZYAN4pu8DZDPNYRejlb21bchcsM6AOHMsAAOvdABEJ/lyUBSOAAgucyQAZxoGQAQ2R4WwIGnhjGAt1kHQLIhLIDEx3p9hay3DJCQY5FZw6alPqAtLS0DlmBizOVGFpHwoO89kl1daB0A86ebAcYm3hMC6KGUDjnfLwO7C3VAnHOadYDiGG0GGBKnUp+PH/Cxs/v3LhTn1AE7ckdZB0jUBhDuMkO88Xi5AbVtP1jA2XrDO3CX1gYOgH8mahA5iKdmNzGAMl8Xe8/pN4YZiLzjarwfAEmpSMD8W14GUODpZLvPCbex/lNugA3hXJGAVbk+BnCr9it7zzGXYRUmd/gBEF8SCdjsZMfFpeov7D2Hyw2rMLkoIgNpwTY21eEKeRAff9HOAlKeGzKAU7kBAJLYYAEJOZUhAxJLP7Nj4GCpcRaK4QcgsilYwM6bL0MGxD76xAKSivVn2slGboAM1eXBAqKvPw8ZsKWglQXse6iPH4Us4wZIyDFb5CC+WtPBANY5fOw9e+731ZVinbP4Afb8CSIBOW+/MoClOc1sBuLv6oD4gvH8gL3OQQCS7kCNm5nG7kgLqxoGBBS972QAc2580K9nvqNAUXsHcI8UXTKYH/BrJmoOBJh4oJABlLgbBwRUtH5nAFOym/TrGXXGGcgrpPF+ACIVgQAj995lALWNXro8s5hGxeu7yd7GDcvy0NW5Ptra2c0Axl3RvwXAqdf68yEpFwawQeIMBBhssqV+7fHSkwWv6OIzT+iK2830gusLbfnGNrw3orI8egbSq42rsCoOgHC22SCtb2q2vJ1u/97DdrEjhuMUSK6JA0CcbgY4olb/8bvALLSulFHRbxuRZjhOQfi4MABAZPefpkqtKy048Zgm57uoq77JFKB1oys1HXRtns8/JuT+X2IpzwxjAO8SB4Bka7DzvhFTVf+B+gZotGx2nILwFmEAGalrrSxi2nfz0CyLxyl2skYYQILOeaJWYtNypo7dRijqXHEAxTFZOEBbdU+6qZxS9uscSGHrSTF5k8QBYvKGCwFk1FH5aBUF+4spMCx2IEDR3ikJDS0Lihptg+Q6QPhz0Ij0GgqSn1E5Qe8egQvusEHiAApGUhyeIf3V2FE0TFYcS2yQJAOIS6xmB0Di1o7P/eef9vsjpLBF0Nn5l/9lnuxAvNK/ekNcoxXtb+037Zrl50YiEpH4P+Mn9Q+e3CSBSHQAAAAASUVORK5CYII="
                    alt=""
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nGNgGAWjYBSMgkEJvt+X+z+YMMOoB+6PxsD/0SREChjoJPN9NBPfH/hQ/z5ajN4f+JD/PlqR3R8cmIFUMNAO/j7qgfsDH+rfR5PQfUpCjBGOl04VQZE7s1Pyf6gv939xUZb/LMyM/yXFWf5HBvD8P7tTcvB7YPtSsf8c7Ewo8gxQzMXJBJYftB74elfuv4IsK1ycnY3pv4YKG5iGiZkasP//dm+QeuDkNgm4GBMT4//TOyBJ5tZRqf9K8qz/cxL5/r++Kjt4Y2DXCnG4GCgZfbyFcOy769gdPqg8cPuYNIq4rxvX/5tHpIg0bxB4AIRd7ThR5DjYmf4nhvP+v7xfamh44N4J6f/62uwYJRAzMyPYI28Gcx6AYZAjy7L5//NwYRanOups/59fkBncHoDhp+dk/jeXCfwXE2FBUZ8VzzewHgCV9/g8gF7Ov7gkAy7/YeplJFno5wFQKeLjwvV/3VxRuNjVA1IoHliLJDe3T/i/kS47RnnfXSsIV8/GykQfDyyeLAKu/mGlSU4S3/+JzUL/LU04UDwAavuA1IPaPzAxe0vO/3eOS4PFn1+U+W9rjtADqq3p4oFL+6TgHsCFVRRY4Ummpx4RyiDMyMj4X0qCBaUpAcKlWfz0S0I7l4v95+Nhxup4UFLYugTROAN5pCJHAK+Hbcw4sBalNPMACD84Jf0/O4Hvv6wUK7g8BzWTAz25/x/fLIFV/aH1Ev/D/Xn+qylBGnIC/Mxgh09pE/r/+TauUo2GHqAHZhj1wP3RGPhP1yQ0CkbBKBgFDPQAANX6rlnxM/hBAAAAAElFTkSuQmCC"
                    alt=""
                  />
                  {/* <img
                    style={{ width: "8%", height: "90%" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
                    alt=""
                  /> */}
                  {/* <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEnklEQVR4nO1ZTYwVRRAeWcFooib+JBoxJuQtTveTmIgQPBhOelHgZDB4YA9evJusITF7EMVw8CDq+kJYNctUjc1O9WOBvRIB48kYCcaLrhFIFGTxYow/wJqaN/B63rx9090zi5q8SjrZ7MxUfdVdXfVVvSAYylCGUl2UGgkpekpo3CU0JILgG0F4WWj8K12ElyXhmfSZxl1hEm8KJiZWBP+2NDU+LAjelgTnpcZFlyU0nhMa9qxLplffdOANpe4XGlpCw5+uwIuOAOuYXDsb3XdTwEuNO4SGhQIQwp8FwZQk2PlYG55kQFKpVbz4b/4fPxMEH/G7fZy5FCbxi8sGfH2rtVIS7i8YJjjR1NGWzceP32qri9+VbdgqNJ7ssxEfsq16wc/O3iE1zPXE8PdhAs9V1d0kfF4SzOc3BY+xzfp2vggeHm2376zFQBAErEtqwJ7TOFrLSfQJmzeq6YM3ZVvJwoPFxVtYd4+tySq2ApnEL9UKXsNeDo/B72DOCaFxe5VUuWCGjS9w3l1B+I4kuBYm8RNl70qC2LgPv4T0yb3ONjnPmxfWO+Y74N/Ncn5ifSfIuNiE77tXWKNIeWebNK7hg0zPVXEYmvYYoi1Gqv7DqWKn9MDI817gJyZW5E6RIHJVITScMir2HruvlBoxuQ3vhA94qfGAAf5vMRONuqqRbdhq6DhrRQCZVZr0wKXCpqLUiND4cU/2OhB4yPpWa6XQeKEbDdHG0o+Y7hpeT7mDh4O9ZE3MHHzExwGW3GYQvhaUCWcKI/53Bi78plhNOYO9F1QQqXHMiIhD5R8Qnrn+ATNI66MmPLQE7+cdHB+0Qoo2L6W7mcQbjBM4XQrGLF42HD2lzITk3Q8QfiWVemBQQTWLmo0D3SZFqVUW4LUveEnw2Rql7h5kozE3d5tZD2pzgJ8JwsMVdn52tVK3l+HxccAqhELCtWWx3VnwZRE8TNmm54ZrCPlc4iWdTKYfZKN5B2AvUwxbHU2PS+yVRpfgQd1GiOCa0PjqsqdRUaWQmXoIXzF2/Uqoo5e99OhcVR8v/YCHTpWoBBudiUYF4W8Z+N+Z01RoZy/e4GVJvMGSReK5G147Gs8q8hfZBvwqND4deIog3GZEw4/W0zymrkYlPeliVGp8PeNAPzWT+HFf8CyC4HMDx1uBrXDzYNYDW0rNWaszD4Xv1s1Ea4IKIg0qzfl/9Ih6yE2BxklDwXxZS8lFSWj8towa2EhjbvouSfCDwWj3OStJR4MaLxmZBAfl77TvtaAGpbKYjlc+NexelErd46WLZ5U2Y5UwgWeYE9lQgzKRGnbn+VL8QiWFPKssONFzEk3CZ33SbZ/Ct7vOXsIc6h7rYZFxnaPFBsd8LmzSuD9SeVNyw92iE/NeDX+/bEPdC3sdfG3D3XxVNDJT19gpBuEyiM06uG1mnjfDprad7yc8qywyzNTwhYy3jPX7gSNjlWOdd7r0QJrZpuqFtRWeVfK4jwuMdzdmFCmhYZ93qqwiXB2ZdvDQyb0jg7NMD5wr7LIIT+Io2shzm3Q6QXiaO7t0JtRZC4Lw62xyMZ6yyv/Cz6xDGUrw/5d/AJWWyz/FX3s8AAAAAElFTkSuQmCC"
                    alt=""
                  /> */}
                </Flex>
                <Flex
                  justifyContent="center"
                  gap="10%"
                  alignItems="center"
                  //  border="1px solid white"
                >
                  <Text>Visit The Website</Text>
                  <Box
                    //  border="1px solid red"
                    width="7%"
                  >
                    <img
                      src="https://www.svgrepo.com/show/331495/netlify.svg"
                      alt=""
                    />
                  </Box>
                </Flex>
                <Flex
                  justifyContent="center"
                  gap="10%"
                  alignItems="center"
                  //  border="1px solid white"
                >
                  <Text>Visit GitHub</Text>
                  <Box
                    //  border="1px solid red"
                    width="7%"
                  >
                    <img
                      style={{ borderRadius: "50%" }}
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt=""
                    />
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </MainDiv>

        {/* <GridItem
          borderRadius="10%"
          border="1px solid green"
          width="100%"
          height="600px"
        /> */}

        <MainDiv
          // borderRadius="10%"
          // // border="2px solid green"
          // width="100%"
          // height="600px"
          // // bg="rgb(24,25,35)"
          // bg = "transparent"
          // position="relative"
          // border = "none"
          // outline = "none"
          className="maindiv"
        >
          <Grid
            // border="1px solid blue"
            height="100%"
            gridTemplateColumns="repeat(2,1fr)"
          >
            <GridItem
              //  border="1px solid pink"
              // border="1px solid white"
              className="box"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                // border="1px solid white"
                height="100%"
                flexDirection="column"
                className="content"
              >
                <img
                  className="shine"
                  style={{
                    width: "70%",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                  }}
                  src={Cath1}
                  alt=""
                />

                <img
                  style={{
                    width: "70%",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                  }}
                  src={Cath2}
                  alt=""
                />
              </Flex>
            </GridItem>
            <GridItem
              // border="1px solid blue"
              ml={-20}
              p={10}
            >
              <Flex
                //  border="1px solid green"
                flexDirection="column"
                justifyContent="center"
                height="100%"
                gap={30}
              >
                <Text
                  color="white"
                  fontFamily="'Mogra', cursive"
                  fontSize="30px"
                >
                  Queen's Closet (Catherines Clone)
                </Text>
                <Text color="white">
                  Queen's Closet is basically cloned website of CATHERINES.com.
                  It was started in Memphis in 1960 and has grown to nearly 500
                  location nationwide. This website is dedicated to providing
                  the best in women's plus size fashion. Designed specially for
                  the plus size woman & gives guaranteed to fit the customers.
                </Text>
                <Flex
                  // border="1px solid white"
                  height="50px"
                  alignItems="center"
                  gap={4}
                  justifyContent="center"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO3ZW2xMQRgH8L+oJogHxAPxghc8iMsDbyWoiHQ7s7UlrkFtUQ0pIUKIS0IqEtdQQVwiLhFEJG4JD3WL4EG0IajbnnO2u92DaovSjmxX9HycadeZYRPZL5lkk8k5Z357vpn5dhZIRzrS8f+GwVFncohUNoPho3cAw4uUAzieqwDupBpgctz2DDA5zqsOQBT/eWuYR+5xTgWwPxWAujnkHmWeAQbHxlQAameRSbxBBVCcCsD7GQSw2DPAYshPBcCe1nq9xRHwDsjFaNnArBndhW3b7bakYtNAAohOdTyLIcszwGQYJP12J2cIOxbTA1jViwCqA44U8mOgZ0CIoWdb6WFbIXVAc7MQSzIIwMprfcabAHp4Bgigg8HQKAPEqirVAfU2GXxzEZnAjfExQCVMDkMKqLhLBmsV9lOexN8WkvwPKQ2+BcDwUAq4f5UCSoYrAxoLCeCBDsBlGaCm/AwBhNeOUwZ8mk9S6JIywGA4IgVcOUQA1aX5yoD6uQ4Ax2EdgK0yQPT8dvVJfGM7AXycTQClygCTY7kUcGKDOuDSegL4MNPxDD+W6QDMkgEih5arA86WEMC76QQwUxlg+DFBCtgdVAccn0sANY4ywmDIVgaE8jDMSxEnncT3jlHAAT/pj+S3XhvKxVBlwGsf+mgFPL5IAbvGkv6wo4yIcPRWBogsZBgMTW6Dq16dRdIlevNc+4CqWxRQOoL0O1agZhFEJ+gIk6PGDRBeMoQAah6Vtw8IV1LA+gE/+5oWkWuj0BUGR6UbwJrXlwBioZcivC5bWIHM3wFLM4XYN0mIhnfSUvrrAvIGKnQCbrjm+NQuritP7G2ViF7YJcJrxgixJ1uIOwcTVadbLO30E/A5SFag6zoBp2ST1I5Y3pfRL3UkvRoKSCF3UhvAZNgp3Y3PbmtJnT8GxFOpfK/8OIVhh07AmjaXy7yOIrxilIic3ixir57KAfE0undUiLKcxJwo/uU4xVEHmQyrtQEMhvlJr/0OjP3qiRD1sTYHLWTHKRwFOgG5njayyRm//d5N9jglxOHTBghzjNK2E8t+Si6CiDhOIywfRuoD+NH/bwAaCxP1f3SKyx6Tg37aANZ4dNUBaCqC+FSQKJmdNY/ptkmOR1fojJa3wBA0OE4bHLXJAr4EE4e1UUeV6doYGkyGawbHStOHwfib8SaAziE/xpkMW0yO+17fjpH4B6gsfv4Z9aEbUhVJv51/+S2rvB2TYeKP3ftZS4t/ZpgY7/N843SkIx3/Z3wHrTGmPWk4PzUAAAAASUVORK5CYII="
                    alt=""
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEElEQVR4nO3YSUwUQRQA0J5qF4zx4JK4HEz04HrRg3G5aIxr4nJRb+pFOelBYaoaVDSgkcUVN0Qxbgfxoh5QYKp6RBQXkIjKMuAoiAziMKCCKCiU6THQXTgtM12lk5j5SSVkuqu7Hr+2LkmKRCQi8f8GQKQdIELDWiBusw6AxB12AMKvODKAH4YdAEmRZYAN4pu8DZDPNYRejlb21bchcsM6AOHMsAAOvdABEJ/lyUBSOAAgucyQAZxoGQAQ2R4WwIGnhjGAt1kHQLIhLIDEx3p9hay3DJCQY5FZw6alPqAtLS0DlmBizOVGFpHwoO89kl1daB0A86ebAcYm3hMC6KGUDjnfLwO7C3VAnHOadYDiGG0GGBKnUp+PH/Cxs/v3LhTn1AE7ckdZB0jUBhDuMkO88Xi5AbVtP1jA2XrDO3CX1gYOgH8mahA5iKdmNzGAMl8Xe8/pN4YZiLzjarwfAEmpSMD8W14GUODpZLvPCbex/lNugA3hXJGAVbk+BnCr9it7zzGXYRUmd/gBEF8SCdjsZMfFpeov7D2Hyw2rMLkoIgNpwTY21eEKeRAff9HOAlKeGzKAU7kBAJLYYAEJOZUhAxJLP7Nj4GCpcRaK4QcgsilYwM6bL0MGxD76xAKSivVn2slGboAM1eXBAqKvPw8ZsKWglQXse6iPH4Us4wZIyDFb5CC+WtPBANY5fOw9e+731ZVinbP4Afb8CSIBOW+/MoClOc1sBuLv6oD4gvH8gL3OQQCS7kCNm5nG7kgLqxoGBBS972QAc2580K9nvqNAUXsHcI8UXTKYH/BrJmoOBJh4oJABlLgbBwRUtH5nAFOym/TrGXXGGcgrpPF+ACIVgQAj995lALWNXro8s5hGxeu7yd7GDcvy0NW5Ptra2c0Axl3RvwXAqdf68yEpFwawQeIMBBhssqV+7fHSkwWv6OIzT+iK2830gusLbfnGNrw3orI8egbSq42rsCoOgHC22SCtb2q2vJ1u/97DdrEjhuMUSK6JA0CcbgY4olb/8bvALLSulFHRbxuRZjhOQfi4MABAZPefpkqtKy048Zgm57uoq77JFKB1oys1HXRtns8/JuT+X2IpzwxjAO8SB4Bka7DzvhFTVf+B+gZotGx2nILwFmEAGalrrSxi2nfz0CyLxyl2skYYQILOeaJWYtNypo7dRijqXHEAxTFZOEBbdU+6qZxS9uscSGHrSTF5k8QBYvKGCwFk1FH5aBUF+4spMCx2IEDR3ikJDS0Lihptg+Q6QPhz0Ij0GgqSn1E5Qe8egQvusEHiAApGUhyeIf3V2FE0TFYcS2yQJAOIS6xmB0Di1o7P/eef9vsjpLBF0Nn5l/9lnuxAvNK/ekNcoxXtb+037Zrl50YiEpH4P+Mn9Q+e3CSBSHQAAAAASUVORK5CYII="
                    alt=""
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nGNgGAWjYBSMgkEJvt+X+z+YMMOoB+6PxsD/0SREChjoJPN9NBPfH/hQ/z5ajN4f+JD/PlqR3R8cmIFUMNAO/j7qgfsDH+rfR5PQfUpCjBGOl04VQZE7s1Pyf6gv939xUZb/LMyM/yXFWf5HBvD8P7tTcvB7YPtSsf8c7Ewo8gxQzMXJBJYftB74elfuv4IsK1ycnY3pv4YKG5iGiZkasP//dm+QeuDkNgm4GBMT4//TOyBJ5tZRqf9K8qz/cxL5/r++Kjt4Y2DXCnG4GCgZfbyFcOy769gdPqg8cPuYNIq4rxvX/5tHpIg0bxB4AIRd7ThR5DjYmf4nhvP+v7xfamh44N4J6f/62uwYJRAzMyPYI28Gcx6AYZAjy7L5//NwYRanOups/59fkBncHoDhp+dk/jeXCfwXE2FBUZ8VzzewHgCV9/g8gF7Ov7gkAy7/YeplJFno5wFQKeLjwvV/3VxRuNjVA1IoHliLJDe3T/i/kS47RnnfXSsIV8/GykQfDyyeLAKu/mGlSU4S3/+JzUL/LU04UDwAavuA1IPaPzAxe0vO/3eOS4PFn1+U+W9rjtADqq3p4oFL+6TgHsCFVRRY4Ummpx4RyiDMyMj4X0qCBaUpAcKlWfz0S0I7l4v95+Nhxup4UFLYugTROAN5pCJHAK+Hbcw4sBalNPMACD84Jf0/O4Hvv6wUK7g8BzWTAz25/x/fLIFV/aH1Ev/D/Xn+qylBGnIC/Mxgh09pE/r/+TauUo2GHqAHZhj1wP3RGPhP1yQ0CkbBKBgFDPQAANX6rlnxM/hBAAAAAElFTkSuQmCC"
                    alt=""
                  />
                  {/* <img
                    style={{ width: "8%", height: "90%" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
                    alt=""
                  /> */}
                  <img style={{ width: "8%", height: "90%" }}
                    src="https://camo.githubusercontent.com/2512b49c89512f2ff3718f7257f48ed5c46a4e331abbd890b6c5e8c0e458434f/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"
                    alt=""
                  />
                </Flex>
                <Flex
                  justifyContent="center"
                  gap="10%"
                  alignItems="center"
                  //  border="1px solid white"
                >
                  <Text>Visit The Website</Text>
                  <Box
                    //  border="1px solid red"
                    width="7%"
                  >
                    <img
                      src="https://www.svgrepo.com/show/331495/netlify.svg"
                      alt=""
                    />
                  </Box>
                </Flex>
                <Flex
                  justifyContent="center"
                  gap="10%"
                  alignItems="center"
                  //  border="1px solid white"
                >
                  <Text>Visit GitHub</Text>
                  <Box
                    //  border="1px solid red"
                    width="7%"
                  >
                    <img
                      style={{ borderRadius: "50%" }}
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt=""
                    />
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </MainDiv>

        {/* <GridItem
          borderRadius="10%"
          border="1px solid green"
          width="100%"
          height="600px"
        /> */}

        <MainDiv
          // borderRadius="10%"
          // // border="2px solid green"
          // width="100%"
          // height="600px"
          // // bg="rgb(24,25,35)"
          // bg = "transparent"
          // position="relative"
          // border = "none"
          // outline = "none"
          className="maindiv"
        >
          <Grid
            // border="1px solid blue"
            height="100%"
            gridTemplateColumns="repeat(2,1fr)"
          >
            <GridItem
              //  border="1px solid pink"
              // border="1px solid white"
              className="box"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                // border="1px solid white"
                height="100%"
                flexDirection="column"
                className="content"
              >
                <img
                  className="shine"
                  style={{
                    width: "70%",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                  }}
                  src={hv1}
                  alt=""
                />

                <img
                  style={{
                    width: "70%",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                  }}
                  src={hv2}
                  alt=""
                />
              </Flex>
            </GridItem>
            <GridItem
              // border="1px solid blue"
              ml={-20}
              p={10}
            >
              <Flex
                //  border="1px solid green"
                flexDirection="column"
                justifyContent="center"
                height="100%"
                gap={30}
              >
                <Text
                  color="white"
                  fontFamily="'Mogra', cursive"
                  fontSize="30px"
                >
                  HealthIV
                </Text>
                <Text color="white">
                  HealthIV, the digital healthcare company focused on improving
                  home health outcomes through technology, now brings its
                  in-home infusion therapy services to the Los Angeles Metro
                  Area. Helmed in Los Angeles by Shawn Ankari, HealthIV's
                  Co-Founder and Business Development Director, HealthIV's new
                  availability for Angelenos is part of the company's ongoing
                  dedication to changing up the home healthcare space by
                  focusing on full digital interoperability between patients,
                  doctors, pharmacists, and home healthcare workers.
                </Text>
                <Flex
                  // border="1px solid white"
                  height="50px"
                  alignItems="center"
                  gap={4}
                  justifyContent="center"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO3ZW2xMQRgH8L+oJogHxAPxghc8iMsDbyWoiHQ7s7UlrkFtUQ0pIUKIS0IqEtdQQVwiLhFEJG4JD3WL4EG0IajbnnO2u92DaovSjmxX9HycadeZYRPZL5lkk8k5Z357vpn5dhZIRzrS8f+GwVFncohUNoPho3cAw4uUAzieqwDupBpgctz2DDA5zqsOQBT/eWuYR+5xTgWwPxWAujnkHmWeAQbHxlQAameRSbxBBVCcCsD7GQSw2DPAYshPBcCe1nq9xRHwDsjFaNnArBndhW3b7bakYtNAAohOdTyLIcszwGQYJP12J2cIOxbTA1jViwCqA44U8mOgZ0CIoWdb6WFbIXVAc7MQSzIIwMprfcabAHp4Bgigg8HQKAPEqirVAfU2GXxzEZnAjfExQCVMDkMKqLhLBmsV9lOexN8WkvwPKQ2+BcDwUAq4f5UCSoYrAxoLCeCBDsBlGaCm/AwBhNeOUwZ8mk9S6JIywGA4IgVcOUQA1aX5yoD6uQ4Ax2EdgK0yQPT8dvVJfGM7AXycTQClygCTY7kUcGKDOuDSegL4MNPxDD+W6QDMkgEih5arA86WEMC76QQwUxlg+DFBCtgdVAccn0sANY4ywmDIVgaE8jDMSxEnncT3jlHAAT/pj+S3XhvKxVBlwGsf+mgFPL5IAbvGkv6wo4yIcPRWBogsZBgMTW6Dq16dRdIlevNc+4CqWxRQOoL0O1agZhFEJ+gIk6PGDRBeMoQAah6Vtw8IV1LA+gE/+5oWkWuj0BUGR6UbwJrXlwBioZcivC5bWIHM3wFLM4XYN0mIhnfSUvrrAvIGKnQCbrjm+NQuritP7G2ViF7YJcJrxgixJ1uIOwcTVadbLO30E/A5SFag6zoBp2ST1I5Y3pfRL3UkvRoKSCF3UhvAZNgp3Y3PbmtJnT8GxFOpfK/8OIVhh07AmjaXy7yOIrxilIic3ixir57KAfE0undUiLKcxJwo/uU4xVEHmQyrtQEMhvlJr/0OjP3qiRD1sTYHLWTHKRwFOgG5njayyRm//d5N9jglxOHTBghzjNK2E8t+Si6CiDhOIywfRuoD+NH/bwAaCxP1f3SKyx6Tg37aANZ4dNUBaCqC+FSQKJmdNY/ptkmOR1fojJa3wBA0OE4bHLXJAr4EE4e1UUeV6doYGkyGawbHStOHwfib8SaAziE/xpkMW0yO+17fjpH4B6gsfv4Z9aEbUhVJv51/+S2rvB2TYeKP3ftZS4t/ZpgY7/N843SkIx3/Z3wHrTGmPWk4PzUAAAAASUVORK5CYII="
                    alt=""
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEElEQVR4nO3YSUwUQRQA0J5qF4zx4JK4HEz04HrRg3G5aIxr4nJRb+pFOelBYaoaVDSgkcUVN0Qxbgfxoh5QYKp6RBQXkIjKMuAoiAziMKCCKCiU6THQXTgtM12lk5j5SSVkuqu7Hr+2LkmKRCQi8f8GQKQdIELDWiBusw6AxB12AMKvODKAH4YdAEmRZYAN4pu8DZDPNYRejlb21bchcsM6AOHMsAAOvdABEJ/lyUBSOAAgucyQAZxoGQAQ2R4WwIGnhjGAt1kHQLIhLIDEx3p9hay3DJCQY5FZw6alPqAtLS0DlmBizOVGFpHwoO89kl1daB0A86ebAcYm3hMC6KGUDjnfLwO7C3VAnHOadYDiGG0GGBKnUp+PH/Cxs/v3LhTn1AE7ckdZB0jUBhDuMkO88Xi5AbVtP1jA2XrDO3CX1gYOgH8mahA5iKdmNzGAMl8Xe8/pN4YZiLzjarwfAEmpSMD8W14GUODpZLvPCbex/lNugA3hXJGAVbk+BnCr9it7zzGXYRUmd/gBEF8SCdjsZMfFpeov7D2Hyw2rMLkoIgNpwTY21eEKeRAff9HOAlKeGzKAU7kBAJLYYAEJOZUhAxJLP7Nj4GCpcRaK4QcgsilYwM6bL0MGxD76xAKSivVn2slGboAM1eXBAqKvPw8ZsKWglQXse6iPH4Us4wZIyDFb5CC+WtPBANY5fOw9e+731ZVinbP4Afb8CSIBOW+/MoClOc1sBuLv6oD4gvH8gL3OQQCS7kCNm5nG7kgLqxoGBBS972QAc2580K9nvqNAUXsHcI8UXTKYH/BrJmoOBJh4oJABlLgbBwRUtH5nAFOym/TrGXXGGcgrpPF+ACIVgQAj995lALWNXro8s5hGxeu7yd7GDcvy0NW5Ptra2c0Axl3RvwXAqdf68yEpFwawQeIMBBhssqV+7fHSkwWv6OIzT+iK2830gusLbfnGNrw3orI8egbSq42rsCoOgHC22SCtb2q2vJ1u/97DdrEjhuMUSK6JA0CcbgY4olb/8bvALLSulFHRbxuRZjhOQfi4MABAZPefpkqtKy048Zgm57uoq77JFKB1oys1HXRtns8/JuT+X2IpzwxjAO8SB4Bka7DzvhFTVf+B+gZotGx2nILwFmEAGalrrSxi2nfz0CyLxyl2skYYQILOeaJWYtNypo7dRijqXHEAxTFZOEBbdU+6qZxS9uscSGHrSTF5k8QBYvKGCwFk1FH5aBUF+4spMCx2IEDR3ikJDS0Lihptg+Q6QPhz0Ij0GgqSn1E5Qe8egQvusEHiAApGUhyeIf3V2FE0TFYcS2yQJAOIS6xmB0Di1o7P/eef9vsjpLBF0Nn5l/9lnuxAvNK/ekNcoxXtb+037Zrl50YiEpH4P+Mn9Q+e3CSBSHQAAAAASUVORK5CYII="
                    alt=""
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nGNgGAWjYBSMgkEJvt+X+z+YMMOoB+6PxsD/0SREChjoJPN9NBPfH/hQ/z5ajN4f+JD/PlqR3R8cmIFUMNAO/j7qgfsDH+rfR5PQfUpCjBGOl04VQZE7s1Pyf6gv939xUZb/LMyM/yXFWf5HBvD8P7tTcvB7YPtSsf8c7Ewo8gxQzMXJBJYftB74elfuv4IsK1ycnY3pv4YKG5iGiZkasP//dm+QeuDkNgm4GBMT4//TOyBJ5tZRqf9K8qz/cxL5/r++Kjt4Y2DXCnG4GCgZfbyFcOy769gdPqg8cPuYNIq4rxvX/5tHpIg0bxB4AIRd7ThR5DjYmf4nhvP+v7xfamh44N4J6f/62uwYJRAzMyPYI28Gcx6AYZAjy7L5//NwYRanOups/59fkBncHoDhp+dk/jeXCfwXE2FBUZ8VzzewHgCV9/g8gF7Ov7gkAy7/YeplJFno5wFQKeLjwvV/3VxRuNjVA1IoHliLJDe3T/i/kS47RnnfXSsIV8/GykQfDyyeLAKu/mGlSU4S3/+JzUL/LU04UDwAavuA1IPaPzAxe0vO/3eOS4PFn1+U+W9rjtADqq3p4oFL+6TgHsCFVRRY4Ummpx4RyiDMyMj4X0qCBaUpAcKlWfz0S0I7l4v95+Nhxup4UFLYugTROAN5pCJHAK+Hbcw4sBalNPMACD84Jf0/O4Hvv6wUK7g8BzWTAz25/x/fLIFV/aH1Ev/D/Xn+qylBGnIC/Mxgh09pE/r/+TauUo2GHqAHZhj1wP3RGPhP1yQ0CkbBKBgFDPQAANX6rlnxM/hBAAAAAElFTkSuQmCC"
                    alt=""
                  />
                  <img
                    style={{ width: "8%", height: "90%" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
                    alt=""
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEnklEQVR4nO1ZTYwVRRAeWcFooib+JBoxJuQtTveTmIgQPBhOelHgZDB4YA9evJusITF7EMVw8CDq+kJYNctUjc1O9WOBvRIB48kYCcaLrhFIFGTxYow/wJqaN/B63rx9090zi5q8SjrZ7MxUfdVdXfVVvSAYylCGUl2UGgkpekpo3CU0JILgG0F4WWj8K12ElyXhmfSZxl1hEm8KJiZWBP+2NDU+LAjelgTnpcZFlyU0nhMa9qxLplffdOANpe4XGlpCw5+uwIuOAOuYXDsb3XdTwEuNO4SGhQIQwp8FwZQk2PlYG55kQFKpVbz4b/4fPxMEH/G7fZy5FCbxi8sGfH2rtVIS7i8YJjjR1NGWzceP32qri9+VbdgqNJ7ssxEfsq16wc/O3iE1zPXE8PdhAs9V1d0kfF4SzOc3BY+xzfp2vggeHm2376zFQBAErEtqwJ7TOFrLSfQJmzeq6YM3ZVvJwoPFxVtYd4+tySq2ApnEL9UKXsNeDo/B72DOCaFxe5VUuWCGjS9w3l1B+I4kuBYm8RNl70qC2LgPv4T0yb3ONjnPmxfWO+Y74N/Ncn5ifSfIuNiE77tXWKNIeWebNK7hg0zPVXEYmvYYoi1Gqv7DqWKn9MDI817gJyZW5E6RIHJVITScMir2HruvlBoxuQ3vhA94qfGAAf5vMRONuqqRbdhq6DhrRQCZVZr0wKXCpqLUiND4cU/2OhB4yPpWa6XQeKEbDdHG0o+Y7hpeT7mDh4O9ZE3MHHzExwGW3GYQvhaUCWcKI/53Bi78plhNOYO9F1QQqXHMiIhD5R8Qnrn+ATNI66MmPLQE7+cdHB+0Qoo2L6W7mcQbjBM4XQrGLF42HD2lzITk3Q8QfiWVemBQQTWLmo0D3SZFqVUW4LUveEnw2Rql7h5kozE3d5tZD2pzgJ8JwsMVdn52tVK3l+HxccAqhELCtWWx3VnwZRE8TNmm54ZrCPlc4iWdTKYfZKN5B2AvUwxbHU2PS+yVRpfgQd1GiOCa0PjqsqdRUaWQmXoIXzF2/Uqoo5e99OhcVR8v/YCHTpWoBBudiUYF4W8Z+N+Z01RoZy/e4GVJvMGSReK5G147Gs8q8hfZBvwqND4deIog3GZEw4/W0zymrkYlPeliVGp8PeNAPzWT+HFf8CyC4HMDx1uBrXDzYNYDW0rNWaszD4Xv1s1Ea4IKIg0qzfl/9Ih6yE2BxklDwXxZS8lFSWj8towa2EhjbvouSfCDwWj3OStJR4MaLxmZBAfl77TvtaAGpbKYjlc+NexelErd46WLZ5U2Y5UwgWeYE9lQgzKRGnbn+VL8QiWFPKssONFzEk3CZ33SbZ/Ct7vOXsIc6h7rYZFxnaPFBsd8LmzSuD9SeVNyw92iE/NeDX+/bEPdC3sdfG3D3XxVNDJT19gpBuEyiM06uG1mnjfDprad7yc8qywyzNTwhYy3jPX7gSNjlWOdd7r0QJrZpuqFtRWeVfK4jwuMdzdmFCmhYZ93qqwiXB2ZdvDQyb0jg7NMD5wr7LIIT+Io2shzm3Q6QXiaO7t0JtRZC4Lw62xyMZ6yyv/Cz6xDGUrw/5d/AJWWyz/FX3s8AAAAAElFTkSuQmCC"
                    alt=""
                  />
                </Flex>
                <Flex
                  justifyContent="center"
                  gap="10%"
                  alignItems="center"
                  //  border="1px solid white"
                >
                  <Text>Visit The Website</Text>
                  <Box
                    //  border="1px solid red"
                    width="7%"
                  >
                    <img
                      src="https://www.svgrepo.com/show/331495/netlify.svg"
                      alt=""
                    />
                  </Box>
                </Flex>
                <Flex
                  justifyContent="center"
                  gap="10%"
                  alignItems="center"
                  //  border="1px solid white"
                >
                  <Text>Visit GitHub</Text>
                  <Box
                    //  border="1px solid red"
                    width="7%"
                  >
                    <img
                      style={{ borderRadius: "50%" }}
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt=""
                    />
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </MainDiv>
      </Grid>
    </Container>
  );
};

const MainDiv = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  border: none;
  outline: none;
  padding: 10px;
  /* background-color : rgb(24,24,35); */

  &:before {
    position: absolute;
    content: "";
    height: 0;
    width: 0;
    border: 3px solid transparent;
    bottom: 0;
    left: 0;
    /* border-radius : 5%; */
    box-sizing: border-box;
  }

  &:after {
    position: absolute;
    content: "";
    height: 0;
    width: 0;
    border: 3px solid transparent;
    top: 0;
    right: 0;
    /* border-radius : 5%; */
    box-sizing: border-box;
  }

  &:hover:before {
    height: 600px;
    width: 100%;
    border: 3px solid rgb(31, 229, 222);
    /* border-radius : 5%; */
    border-right: none;
    border-bottom: none;
    transition: height 0.5s linear, width 0.5s linear 0.5s;
  }

  &:hover:after {
    height: 600px;
    width: 100%;
    border: 3px solid rgb(31, 229, 222);
    /* border-radius : 5%; */
    border-left: none;
    border-top: none;
    transition: height 0.5s linear, width 0.5s linear 0.5s;
  }
`;
