import {
  Box,
  Flex,
  useMediaQuery,
  Spacer,
  Avatar,
  Link,
  StylesProvider,
} from "@chakra-ui/react";
import Navlink from "./Navlink";

export default function Navigation(): JSX.Element {
  const resumeLink =
    "https://drive.google.com/file/d/1IVsF6spxLoxz45U-QeJN62OudVsEQ8Av/view?usp=share_link ";

  return (
    <Box flexDirection="row" alignItems="center" height="100%" as="nav">
      <Box
        as="hr"
        height="5px"
        width="100%"
        // bg="teal.500"
        position="absolute"
        top="0"
        left="0"
      />
      <Flex px={5} maxW="container.2xl" align="center" mx="auto">
        <>
          <Link
            href="/"
            _hover={{
              color: "teal.300",
              transition: "0.2s",
            }}
            fontSize="2xl"
            fontWeight="bold"
          >
            Marcelino
            <Box as="span" color="teal.500">
              .
            </Box>
          </Link>
        </>

        <Spacer />
        <Flex>
          <Navlink href="/about">
            <Box p="2" fontWeight="bold">
              About
            </Box>
          </Navlink>
          <Navlink href="/archives">
            <Box p="2" fontWeight="bold">
              Projects
            </Box>
          </Navlink>
          <Link
            href={resumeLink}
            isExternal
            _hover={{
              color: "teal.300",
              transition: "0.2s",
            }}
          >
            <Box
              p="4"
              bg="teal.400"
              fontWeight="bold"
              _hover={{
                bg: "black",
                transition: "0.2s",
              }}
            >
              Download CV
            </Box>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
