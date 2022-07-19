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
      <Heading as="h1" color="#FF4500">
        Technical Skills
      </Heading>

      <Stack mt={5}>
        <Heading as="h2" size="md">
          Programming Languages
        </Heading>
        <Flex mt={3} mb={5} wrap="wrap">
          <Skill name="Go" icon={Go} />
          <Skill name="Python" icon={Python} />
          {/* <ListItem icon={Python} />
          <ListItem icon={Javascript} />
          <ListItem icon={Typescript} /> */}
        </Flex>
      </Stack>

      <Heading as="h2" size="md">
        Web technologies
      </Heading>
      <UnorderedList mt={3} mb={5}>
        <ListItem ml={5}>React</ListItem>
        <ListItem ml={5}>Next.js</ListItem>
        <ListItem ml={5}>Gatsby.js</ListItem>
        <ListItem ml={5}>ChakraUI</ListItem>
      </UnorderedList>

      <Heading as="h2" size="md">
        Tools
      </Heading>
      <UnorderedList mt={3} mb={5}>
        <ListItem ml={5}>Git</ListItem>
        <ListItem ml={5}>Docker</ListItem>
        <ListItem ml={5}>Kubernetes</ListItem>
        <ListItem ml={5}>Linux / Unix</ListItem>
      </UnorderedList>

      <Heading as="h2" size="md">
        Database framework
      </Heading>
      <UnorderedList mt={3}>
        <ListItem ml={5}>MongoDB</ListItem>
      </UnorderedList>
    </Box>
  );
}
