import { Link, useColorModeValue } from '@chakra-ui/react'
import Page from 'next/link'

const Navlink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <Page href={href}>
            <Link
                px={4}
                py={2}
                rounded={'md'}
                _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                }}
            >
                {children}
            </Link>
        </Page>
    )
}

export default Navlink