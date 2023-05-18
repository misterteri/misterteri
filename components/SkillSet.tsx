import Layout from "../components/Layout";

import {
  Divider,
  Heading,
  Flex,
  HStack,
  Link,
  Box,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Skill from "./Skill";
import NextLink from "next/link";
import Experience from "../components/Experience";
import PostgreSQL from "../icons/postgresql";
import MongoDB from "../icons/mongodb";
import GraphQL from "../icons/graphql";
import Go from "../icons/go";
import Python from "../icons/python";
import Typescript from "../icons/typescript";
import Javascript from "../icons/javascript";
import React from "../icons/react";
import Linux from "../icons/linux";
import Kubernetes from "../icons/kubernetes";
import Docker from "../icons/docker";
import Git from "../icons/git";
import Next from "../icons/next";
import Gatsby from "../icons/gatsby";
import Cypress from "../icons/cypress";
import ChakraUI from "../icons/chakraui";
import Firebase from "../icons/firebase";
import Anaconda from "../icons/anaconda";
import Keras from "../icons/keras";
import Tensorflow from "../icons/tensorflow";
import Horovod from "../icons/horovod";
import Kubeflow from "../icons/kubeflow";

export default function SkillSet(): JSX.Element {
  return (
    <Box my={10}>
      {/* <Heading as="h1">
        <Box as="span" bgGradient="linear(to-l, teal.100, teal.500)">
          Technical Skills
        </Box>
      </Heading> */}
      <Flex padding="2">
        <Box
          display="inline-block"
          border="2px solid black"
          padding="2px"
          background="linear-gradient(45deg, black 8px, #38B2AC 0)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.4)"
        >
          <Text fontSize="xx-large" fontWeight={" bold"}>
            Technical Skills
          </Text>
        </Box>
      </Flex>

      <Stack mt={5}>
        <Heading as="h2" size="md">
          Programming Languages
        </Heading>

        <Flex mt={3} mb={5} flexWrap="wrap">
          <Skill name="Go" icon={Go} />
          <Skill name="Python" icon={Python} />
          <Skill name="Typescript" icon={Typescript} />
          <Skill name="Javascript" icon={Javascript} />
        </Flex>
      </Stack>

      <Stack mt={5}>
        <Heading as="h2" size="md">
          Web technologies
        </Heading>

        <Flex mt={3} mb={5} flexWrap="wrap">
          <Skill name="React" icon={React} />
          <Skill name="Next.js" icon={Next} />
          <Skill name="Gatsby" icon={Gatsby} />
          <Skill name="ChakraUI" icon={ChakraUI} />
        </Flex>
      </Stack>

      <Stack mt={5}>
        <Heading as="h2" size="md">
          Tools
        </Heading>
        <Flex mt={3} mb={5} flexWrap="wrap">
          <Skill name="Git" icon={Git} />
          <Skill name="Docker" icon={Docker} />
          <Skill name="Kubernetes" icon={Kubernetes} />
        </Flex>
      </Stack>

      <Stack mt={5}>
        <Heading as="h2" size="md">
          Database Framework
        </Heading>
        <Flex mt={3} mb={5} flexWrap="wrap">
          <Skill name="MongoDB" icon={MongoDB} />
          <Skill name="Firebase" icon={Firebase} />
        </Flex>
      </Stack>
    </Box>
  );
}
