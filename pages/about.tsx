import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/layouts/Page";

const About: NextPage = () => {
  return (
    <Layout>
      <Stack my={5}>
        <Heading as="h1" color={"#394760"}>
          About me
        </Heading>
        <Text color={"#9FADC6"}>
          Hello, I am Marcelino Gilbert Tagore, a fourth year student in
          National Tsing Hua University, Hsinchu, Taiwan.
        </Text>
      </Stack>

      <Stack my={5}>
        <Heading as="h1" color={"#394760"}>
          What do I do?
        </Heading>
        <Box lineHeight="taller" color={"#9FADC6"}>
          {"A "}
          <Text display="inline-flex" as="em" fontWeight={"bold"}>
            Software Engineer.
          </Text>
          {" Currently I am working on a project in the field of"}
          <Text display="inline-flex" as="em" fontWeight={"bold"}>
            Web Developoment, Scheduling, and Database.
          </Text>
        </Box>
      </Stack>

      <Stack my={5}>
        <Heading as="h1" color={"#394760"}>
          Why do I blog?
        </Heading>
        <Text color={"#9FADC6"}>
          To share my knowledge and experience to the world, and to showcase my
          skills and achievements.
        </Text>
      </Stack>
    </Layout>
  );
};

export default About;

// UNDERSTOOD and edited
