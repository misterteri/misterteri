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
} from "@chakra-ui/react";
import NiceAvatar, { genConfig } from "react-nice-avatar";
import NextLink from "next/link"; // optimize for inside links within the same website
import { AiTwotoneBoxPlot } from "react-icons/ai";

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Grid
        height="100%"
        templateRows="repeat(3, 2fr)"
        templateColumns="repeat(3, 2fr)"
      >
        <GridItem rowSpan={3} colSpan={1} bg="black"></GridItem>
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
      </Grid>
    </Layout>
  );
};

export default Home;

// UNDERSTOOD
