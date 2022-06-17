import type { NextPage } from 'next'
import Layout from '../components/layouts/Page'
import { Heading, Stack } from '@chakra-ui/react'

const Portfolio: NextPage = () => {
    return (
        <Layout>
            <Stack align="center">
                <Heading>This is Portfolio page</Heading>
            </Stack>
        </Layout>
    )
}

export default Portfolio