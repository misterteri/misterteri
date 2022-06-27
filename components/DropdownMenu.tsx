import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  Box,
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
        // change icon to triangle up after click
        icon={<TriangleDownIcon />}
        aria-label="Toggle menu"
        variant="ghost"
        mr="auto"
      />
      <MenuList alignItems={"center"}>
        <LinkBox>
          <MenuItem>
            <NextLink href="/" passHref>
              <LinkOverlay>Home</LinkOverlay>
            </NextLink>
          </MenuItem>
        </LinkBox>
        <LinkBox>
          <MenuItem>
            <NextLink href="/blog" passHref>
              <LinkOverlay>Blog</LinkOverlay>
            </NextLink>
          </MenuItem>
        </LinkBox>
        <LinkBox>
          <MenuItem>
            <NextLink href="/about" passHref>
              <LinkOverlay>About</LinkOverlay>
            </NextLink>
          </MenuItem>
        </LinkBox>
        <LinkBox>
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
