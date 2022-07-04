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
        variant=""
        paddingInline={4}
        paddingBlock={2}
        color={"#9FADC6"}
        fontWeight={"500"}
        _hover={{
          bg: "#9FADC6",
          color: "#0C0E13",
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
