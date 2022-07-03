import type { NextPage } from "next";
import Layout from "../components/layouts/Page";
import { Heading, VStack, Text, Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Layout>
      <VStack align={"left"} spacing="0">
        <Heading as="h3" fontSize={"sm"}>
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
    </Layout>
  );
};

export default Home;

// UNDERSTOOD
