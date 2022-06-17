import type { NextPage } from 'next'
import Layout from '../components/layouts/Page'
import { Heading, Stack } from '@chakra-ui/react'

const Resume: NextPage = () => {
    return (
        <Layout>
            <Stack align="center">
                <Heading>This is Resume page</Heading>
            </Stack>
        </Layout>
    )
}

export default Resume