import {
  Box,
  Flex,
  useMediaQuery,
  Spacer,
  Avatar,
  Link,
} from "@chakra-ui/react";
import Navlink from "./Navlink";

export default function Navigation(): JSX.Element {
  const resumeLink =
    "https://drive.google.com/file/d/1yUr0Q-JXCaE1HIgRu_Zoph4i2R_vQ_IN/view?usp=share_link";
  return (
    <Box flexDirection="row" alignItems="center" height="100%" as="nav">
      <Box
        as="hr"
        height="5px"
        width="100%"
        bg="teal.500"
        position="absolute"
        top="0"
        left="0"
      />
      <Flex py={2} px={5} maxW="container.2xl" align="center" mx="auto">
        <>
          <Link
            href="/"
            _hover={{
              color: "teal.300",
              transition: "0.2s",
            }}
            fontSize="xl"
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
            <Box p="2">About</Box>
          </Navlink>
          <Navlink href="/archives">
            <Box p="2">Projects</Box>
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
