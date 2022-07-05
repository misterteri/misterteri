import type { NextPage } from "next";
import Layout from "../components/layouts/Page";
import { Heading, VStack, Text, Flex, HStack, Image } from "@chakra-ui/react";
import NiceAvatar, { genConfig } from "react-nice-avatar";

const config = {
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
  hatColor: "#D2EFF3",
  eyeBrowStyle: "up",
  shirtColor: "#77311D",
  bgColor: "#9FADC6",
  shape: "square",
};

const myConfig = genConfig(config);

const Home: NextPage = () => {
  return (
    <Layout>
      <HStack spacing={"8"}>
        <VStack align={"left"}>
          <Heading
            as="h3"
            fontSize={"sm"}
            fontFamily={"helvetica"}
            fontWeight={500}
            color={"#394760"}
          >
            Hello
          </Heading>
          <Flex fontFamily={"helvetica"} fontSize="3xl" gap={2}>
            <Text color="#394760" fontWeight={500}>
              {"I'm"}
            </Text>
            <Text color="#9FADC6" fontWeight={700}>
              {" Marcellino Gilbert"}
            </Text>
          </Flex>
        </VStack>
        <NiceAvatar style={{ width: "10rem", height: "10rem" }} {...myConfig} />
      </HStack>
    </Layout>
  );
};

export default Home;

// UNDERSTOOD
