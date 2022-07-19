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
} from "@chakra-ui/react";
import NiceAvatar, { genConfig } from "react-nice-avatar";
import NextLink from "next/link"; // optimize for inside links within the same website
import { AiTwotoneBoxPlot } from "react-icons/ai";
// create object AvatarConfig
const AvatarConfig = genConfig({
  sex: "man",
  faceColor: "#F9C9B6",
  earSize: "big",
  eyeStyle: "smile",
  noseStyle: "long",
  mouthStyle: "peace",
  shirtStyle: "polo",
  glassesStyle: "round",
  hairColor: "#000",
  hairStyle: "thick",
  hatStyle: "none",
  eyeBrowStyle: "up",
  shirtColor: "#77311D",
  bgColor: "#9FADC6",
});

const Home = (): JSX.Element => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Layout>
      {isMobile ? (
        <>
          <VStack spacing={8}>
            <Heading as="h3" size="md">
              <NiceAvatar
                shape={"circle"}
                style={{ width: "10rem", height: "10rem" }}
                {...AvatarConfig}
              />
            </Heading>

            <Box fontFamily={"helvetica"} gap={2}>
              <Heading as="h1" color="#FF4500">
                {"Marcelino Gilbert"}
              </Heading>
              <Text fontSize={"smaller"}>
                An Undergraduate Student at{" "}
                <Link
                  href={"https://ibp.nthu.edu.tw/"}
                  fontStyle={"italic"}
                  fontWeight={"bold"}
                  isExternal
                >
                  National Tsing Hua University
                </Link>
                .
              </Text>
            </Box>
          </VStack>
        </>
      ) : (
        <>
          <HStack>
            <Box>
              <Heading as="h1">{"Marcelino Gilbert"}</Heading>
              <Text fontSize={"smaller"}>
                An Undergraduate Student at{" "}
                <Link
                  href={"https://ibp.nthu.edu.tw/"}
                  fontStyle={"italic"}
                  isExternal
                >
                  National Tsing Hua University
                </Link>
                .
              </Text>
            </Box>
            <Spacer />
            <NextLink href="/about">
              <NiceAvatar
                shape={"circle"}
                style={{ width: "10rem", height: "10rem" }}
                {...AvatarConfig}
              />
            </NextLink>
          </HStack>
        </>
      )}
    </Layout>
  );
};

export default Home;

// UNDERSTOOD
