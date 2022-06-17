import type { NextPage } from 'next'
import Layout from '../components/layouts/Page'
import { Heading, Stack } from '@chakra-ui/react'

const Home: NextPage = () => {
    return (
        <Layout>
            <Stack align="center">
                <Heading>This is Home page</Heading>
            </Stack>
        </Layout>
    )
}

export default Home