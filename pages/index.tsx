import theme from "../styles/theme";
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
              color={theme.modes.dark.primary}
            >
              Hello,
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
                color={"#394760"}
              >
                Hello,
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
