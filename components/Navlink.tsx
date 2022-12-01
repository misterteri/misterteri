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
  const router = useRouter();
  var isActive = router.pathname === href;

  if (href.includes("about")) {
    isActive = router.pathname.includes("/about");
  }

  if (href.includes("archives")) {
    isActive = router.pathname.includes("/archives");
  }

  return (
    <NextLink href={href}>
      <Link
        // paddingInline={4}
        paddingBlock={2}
        color={isActive ? "teal.300" : "black"}
        backgroundColor={isActive ? "white" : "transparent"}
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
