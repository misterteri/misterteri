import { Box, Flex, useMediaQuery, Spacer } from "@chakra-ui/react";
import Navlink from "./Navlink";

import Switch from "./Switch";

export default function Navigation(): JSX.Element {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
      width="100%"
      as="nav"
    >
      <Flex py={2} px={5} maxW="container.sm" align="center" mx="auto">
        <>
          <Flex>
            <Navlink href="/">Home</Navlink>
            <Spacer />
            <Navlink href="/archives">Archives</Navlink>
            <Spacer />
            <Navlink href="/about">About</Navlink>
            <Spacer />
            <Navlink href="/portfolio">Portfolio</Navlink>
          </Flex>
        </>

        <Spacer />
        <Switch />
      </Flex>
    </Box>
  );
}
