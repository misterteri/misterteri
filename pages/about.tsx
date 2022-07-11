import Layout from "../components/Layout";
import { AiOutlineProject } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import { GiArchiveResearch } from "react-icons/gi";
import { MdOutlineSchool, MdOutlineWorkOutline } from "react-icons/md";
import {
  Divider,
  Heading,
  HStack,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function About(): JSX.Element {
  const color = "gray.300";

  return (
    <Layout>
      <Stack>
        <Heading as="h1">About me</Heading>
        <Text lineHeight="taller">
          Hey, I am Marcelino Gilbert Tagore. I am an Electrical Engineering and
          Computer Science undergraduate student at National Tsing Hua
          University in Hsinchu, Taiwan. I have since started my journey as a
          software engineer in the past few months. I am currently working on
          several projects . Click on the{" "}
          <Link href="/portfolio" color={"ButtonFace"}>
            link
          </Link>{" "}
          to see some of them.
        </Text>
      </Stack>

      <HStack my={5}>
        <Heading as="h1">2022</Heading>
        <Divider
          orientation="horizontal"
          __css={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: color,
          }}
        />
      </HStack>

      <HStack my={5}>
        <MdOutlineSchool size="2rem" />
        <Text>Paper Summerizer</Text>
      </HStack>

      <HStack my={5}>
        <FaChalkboardTeacher size="2rem" />
        <Text>Schedulearn</Text>
      </HStack>

      <HStack my={5}>
        <AiOutlineProject size="2rem" />
        <NextLink passHref href="/portfolio/personal-website">
          <Text
            css={{
              color: "#fc909f",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Personal website
          </Text>
        </NextLink>
      </HStack>

      <Heading as="h1">Technical Skills</Heading>

      <Heading as="h2" size="md" mt={3}>
        Programming Languages
      </Heading>
      <UnorderedList mt={3} mb={5}>
        <ListItem ml={5}>C++</ListItem>
        <ListItem ml={5}>Python</ListItem>
        <ListItem ml={5}>Golang</ListItem>
        <ListItem ml={5}>Typescript / Javascript</ListItem>
      </UnorderedList>

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

      <Text my={5}>
        For more details, my resume can be downloaded{" "}
        <Link href={process.env.RESUME_URL} color="#fc909f" isExternal>
          here
        </Link>
        .
      </Text>
    </Layout>
  );
}
