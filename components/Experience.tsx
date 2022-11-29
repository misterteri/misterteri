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
  Box,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Experience(): JSX.Element {
  const color = "gray.300";
  return (
    <Box my={10}>
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
        <AiOutlineProject size="2rem" />
        <NextLink passHref href="/portfolio/paper-summerizer">
          <Text
            css={{
              color: "teal",
              fontWeight: "bold",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Paper Summerizer
          </Text>
        </NextLink>
      </HStack>

      <HStack my={5}>
        <AiOutlineProject size="2rem" />
        <NextLink passHref href="/portfolio/schedulearn">
          <Text
            css={{
              color: "teal",
              fontWeight: "bold",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Schedulearn
          </Text>
        </NextLink>
      </HStack>
      <HStack my={5}>
        <AiOutlineProject size="2rem" />
        <NextLink passHref href="/portfolio/personal-website">
          <Text
            css={{
              color: "teal",
              fontWeight: "bold",
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
    </Box>
  );
}
