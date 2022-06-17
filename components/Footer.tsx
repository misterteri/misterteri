import { Flex, Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'

const Footer: React.FC = () => {
    const size = '2rem'
    const link = [
        {
            icon: <BsGithub style={{ fontSize: size }} />,
            url: 'https://github.com/bsraya',
        },
        {
            icon: <BsLinkedin style={{ fontSize: size }} />,
            url: 'https://www.linkedin.com/in/bijonsetyawan/'
        },
        {
            icon: <AiTwotoneMail style={{ fontSize: size }} />,
            url: 'mailto:nathan.setyawan96@gmail.com',
        },
    ]

    return (
        <Flex as="footer" marginBottom={20} direction="column" align="center">
            <Flex maxW="container.md">
                {link.map((item, index) => (
                    <Link
                        key={index}
                        as="a"
                        px={4}
                        py={2}
                        rounded={'md'}
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.200', 'gray.700'),
                        }}
                    >
                        <NextLink href={item.url} passHref={true}>
                            {item.icon}
                        </NextLink>
                    </Link>
                ))}
            </Flex>
            <Flex as="p" mt={2}>
                Bijon Setyawan Raya © {new Date().getFullYear()}
            </Flex>
        </Flex>
    );
}

export default Footer