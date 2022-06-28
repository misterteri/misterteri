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
        mr={2}
        rounded={"md"}
        variant="ghost"
        paddingInline={4}
        paddingBlock={2}
        _hover={{
          bg: "gray.200",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
}

// for NavBar.tsx,
// UNDERSTOOD
