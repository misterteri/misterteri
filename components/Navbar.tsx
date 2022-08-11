import {
  Box,
  Flex,
  useMediaQuery,
  Spacer,
  Avatar,
  Link,
} from "@chakra-ui/react";
import Navlink from "./Navlink";

import Switch from "./Switch";

export default function Navigation(): JSX.Element {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      height="100%"
      width="100%"
      as="nav"
    >
      <Flex py={2} px={5} maxW="container.md" align="center" mx="auto">
        <>
          <Link href="/">
            <Avatar
              name="Marcelino Gilbert"
              size="sm"
              src="../images/avatar.png"
              cursor="pointer"
            />
          </Link>
          <Spacer />
          <Flex>
            <Navlink href="/archives">Archives</Navlink>
            <Navlink href="/about">About</Navlink>
            <Navlink href="/portfolio">Portfolio</Navlink>
          </Flex>
        </>

        <Spacer />
        <Switch />
      </Flex>
    </Box>
  );
}
