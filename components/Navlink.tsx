import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Navlink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): JSX.Element {
  const isActive = useRouter().pathname === href;
  return (
    <NextLink href={href}>
      <Link
        mr={2}
        rounded={"md"}
        paddingInline={4}
        paddingBlock={2}
        fontWeight={isActive ? "bolder" : "normal"}
        _hover={{
          textDecoration: "underline",
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
