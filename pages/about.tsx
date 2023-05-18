import Layout from "../components/Layout";

import {
  Box,
  Divider,
  Heading,
  HStack,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Experience from "../components/Experience";
import SkillSet from "../components/SkillSet";
import avatar from "../public/images/avatar3.png";

export default function About(): JSX.Element {
  const resumeLink =
    "https://drive.google.com/file/d/1fjxrTUREmnR_sHbeM-QrOMA4DqP1hj_o/view?usp=sharing";

  return (
    <Layout>
      <Stack>
        {/* <Heading as="h1">
          <Box as="span" bgGradient="linear(to-l, teal.100, teal.500)">
            About
          </Box>
        </Heading> */}

        <Flex justifyContent="center">
          <Box
            as="img"
            src={"/images/avatar3.png"}
            alt="Avatar of Marcelino Gilbert"
            width="200px"
            height="200px"
            borderRadius="full"
            border="2px solid black"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.4)"
          />
        </Flex>
        <Flex padding="2">
          <Box
            display="inline-block"
            border="2px solid black"
            padding="2px"
            background="linear-gradient(45deg, black 8px, #38B2AC 0)"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.4)"
          >
            <Text fontSize="xx-large" fontWeight={" bold"}>
              About
            </Text>
          </Box>
        </Flex>
        <Text lineHeight="taller">
          Hi! I am <strong>Marcelino Gilbert</strong>, a fourth year student,
          studying <strong>Electrical Engineering and Computer Science</strong>{" "}
          at National Tsing Hua University in Hsinchu, Taiwan. I am currently
          working on several projects related to{" "}
          <strong> Web Development</strong> and <strong> API </strong>
        </Text>
      </Stack>
      <Experience />
      <SkillSet />
    </Layout>
  );
}
