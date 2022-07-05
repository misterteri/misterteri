import Navbar from "./Navbar";
import Seo from "./Seo";
import Footer from "./Footer";
import { Box, Container } from "@chakra-ui/react";
import prismStyles from "../styles/prism";

import { Global } from "@emotion/react";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box as="main">
      <Seo />
      <Navbar />

      <Container maxW="container.sm" my={15} position={"sticky"}>
        <Global styles={prismStyles} />
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
