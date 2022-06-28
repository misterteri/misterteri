import { HamburgerIcon } from "@chakra-ui/icons";
import {
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Dropdown(): JSX.Element {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        variant="ghost"
        mr={2}
        _hover={{
          bg: "gray.200",
          transition: "all 0.3s ease-in-out",
        }}
      />
      <MenuList alignItems={"center"}>
        <LinkBox
          _hover={{
            bg: "gray.200",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <MenuItem>
            <NextLink href="/" passHref>
              <LinkOverlay>Home</LinkOverlay>
            </NextLink>
          </MenuItem>
        </LinkBox>
        <LinkBox
          _hover={{
            bg: "gray.200",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <MenuItem>
            <NextLink href="/blog" passHref>
              <LinkOverlay>Blog</LinkOverlay>
            </NextLink>
          </MenuItem>
        </LinkBox>
        <LinkBox
          _hover={{
            bg: "gray.200",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <MenuItem>
            <NextLink href="/about" passHref>
              <LinkOverlay>About</LinkOverlay>
            </NextLink>
          </MenuItem>
        </LinkBox>
        <LinkBox
          _hover={{
            bg: "gray.200",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <MenuItem>
            <NextLink href="/portfolio" passHref>
              <LinkOverlay>Portfolio</LinkOverlay>
            </NextLink>
          </MenuItem>
        </LinkBox>
      </MenuList>
    </Menu>
  );
}
