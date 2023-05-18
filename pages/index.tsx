import Layout from "../components/Layout";
import {
  Heading,
  VStack,
  Text,
  Flex,
  HStack,
  useMediaQuery,
  Spacer,
  Box,
  Link, // for external links
  Grid,
  GridItem,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import NiceAvatar, { genConfig } from "react-nice-avatar";
import NextLink from "next/link"; // optimize for inside links within the same website
import { AiTwotoneBoxPlot } from "react-icons/ai";
import avatart from "../public/images/avatar2.png";
import { motion, isValidMotionProp } from "framer-motion";
import { FaUnderline } from "react-icons/fa";
const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Home = (): JSX.Element => {
  const ColoredUnderlineText = chakra(Text, {
    baseStyle: {
      fontWeight: "bold",
      position: "relative",
      display: "inline-block",
      _after: {
        content: '""',
        position: "absolute",
        bottom: "1px",
        left: 0,
        width: "100%",
        height: "2px",
        backgroundColor: "#38B2AC",
      },
    },
  });

  return (
    <Layout>
      <Flex direction={"column"} alignItems={"center"}>
        <ChakraBox
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "30%", "50%", "50%", "20%"],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          padding="2"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100px"
          height="100px"
        >
          <Text
            color="white"
            fontSize="xl"
            fontWeight="bold"
            textShadow="2px 2px #7928CA"
          >
            Hey! 👋
          </Text>
        </ChakraBox>

        <Box
          display="flex"
          justifyContent={"left"}
          alignItems="center"
          paddingTop="10"
          marginTop={10}
        >
          <Text fontSize="xl" fontWeight="bold" color="black">
            {/* Computer Science Student, Web Developer, and a Tech Enthusiast. */}
            <ColoredUnderlineText>
              Computer Science Student
            </ColoredUnderlineText>
            {", "}
            <ColoredUnderlineText>Web Developer</ColoredUnderlineText>
            {", and a "}
            <ColoredUnderlineText>Tech Enthusiast</ColoredUnderlineText>.
          </Text>
        </Box>
      </Flex>
      {/* <Flex padding="2">
        <Box
          display="inline-block"
          border="2px solid black"
          padding="2px"
          background="linear-gradient(45deg, black 5px, #808080 0)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.4)"
        >
          <Text fontSize="xl" fontWeight="semibold">
            STACK
          </Text>
        </Box>
      </Flex> */}
      <Flex align="center" justify="center" marginTop={10}>
        <Box
          p={8}
          maxW="400px"
          textAlign="center"
          bg="gray.100"
          rounded="md"
          shadow="lg"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Under Construction
          </Text>
          <Text mb={6}>This website is currently under development.</Text>
          <Text mb={6}>Thank you for your patience.</Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Home;

// UNDERSTOOD

{
  /* <Grid
  height="100%"
  templateRows="repeat(3, 2fr)"
  templateColumns="repeat(3, 2fr)"
>
  <GridItem rowSpan={3} colSpan={1} bg="black">
    <avatart />
  </GridItem>
  <GridItem rowSpan={1} colSpan={2}>
    <Heading as="h1" size="4xl" fontWeight="bold" color="teal.500">
      I'm Marcelino Gilbert.
    </Heading>
  </GridItem>
  <GridItem rowSpan={1} colSpan={2}>
    <Heading as="h1" size="4xl" fontWeight="bold" color="teal.500">
      A Website Developer
    </Heading>
  </GridItem>
  <GridItem rowSpan={1} colSpan={2}>
    <Heading as="h1" size="4xl" fontWeight="bold" color="grey">
      based in Taiwan.
    </Heading>
  </GridItem>
</Grid> */
}
