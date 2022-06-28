import { Box, Flex, useMediaQuery, Spacer } from "@chakra-ui/react";
import Navlink from "./Navlink";
import Dropdown from "./DropdownMenu";
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
        {isMobile ? (
          <>
            <Dropdown />
          </>
        ) : (
          <>
            <Flex color="000000" fontSize="inherit" fontFamily={"open sans"}>
              <Navlink href="/">Home</Navlink>
              <Navlink href="/blog">Blog</Navlink>
              <Navlink href="/about">About</Navlink>
              <Navlink href="/portfolio">Portfolio</Navlink>
            </Flex>
          </>
        )}
        <Spacer />
        <Switch />
      </Flex>
    </Box>
  );
}
