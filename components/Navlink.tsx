import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Navlink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <NextLink href={href}>
      <Link
        mr={5}
        rounded={"md"}
        variant="ghost"
        _hover={{
          textDecoration: "underline",
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
}

// UNDERSTOOD
