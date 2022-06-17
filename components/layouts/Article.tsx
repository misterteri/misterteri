import Navbar from '../Navbar'
import Seo from '../Seo'
import Footer from '../Footer'
import { Box, Container } from '@chakra-ui/react'

const Article: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box as="main" pb={8}>
            <Seo />
            <Navbar />
            <Container
                maxW="container.md"
                pt={14}
            >
                {children}
            </Container>
            <Footer />
        </Box>
    );
}

export default Article