import Layout from "../components/Layout";
import {
  Heading,
  VStack,
  Text,
  Flex,
  HStack,
  useMediaQuery,
  Spacer,
} from "@chakra-ui/react";
import NiceAvatar, { genConfig } from "react-nice-avatar";
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
            <Heading
              as="h3"
              fontSize={"sm"}
              fontFamily={"helvetica"}
              fontWeight={500}
            >
              Hello,
            </Heading>
            <Flex fontFamily={"helvetica"} fontSize="3xl" gap={2}>
              <Text fontWeight={500}>{"I'm a "}</Text>
              <Text fontWeight={700}>{"Software Engineer"}</Text>
            </Flex>
          </VStack>
        </>
      ) : (
        <>
          <HStack spacing={"4"}>
            <VStack align={"left"}>
              <Heading
                as="h3"
                fontSize={"sm"}
                fontFamily={"helvetica"}
                fontWeight={500}
              >
                Hello,
              </Heading>
              <Flex fontFamily={"helvetica"} fontSize="3xl" gap={2}>
                <Text fontWeight={500}>{"I'm"}</Text>
                <Text fontWeight={700}>{" Marcellino Gilbert"}</Text>
              </Flex>
            </VStack>
            <NiceAvatar
              style={{ width: "10rem", height: "10rem" }}
              {...AvatarConfig}
            />
          </HStack>
        </>
      )}
    </Layout>
  );
};

export default Home;

// UNDERSTOOD
