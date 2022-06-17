import { Heading, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Layout from '../components/layouts/Page'

const About: NextPage = () => {
    return (
        <Layout>
            <Stack my={5}>
                <Heading as="h1">
                    About me
                </Heading>
                <Text>
                    Hey, I am Bijon Setyawan Raya! I am a graduate Computer Science student at National Tsing Hua University in Hsinchu, Taiwan. So far, I have been living in Taiwan for six years, and I am on my way to get my master's degree in Computer Science.
                </Text>
            </Stack>

            <Stack my={5}>
                <Heading as="h1">
                    What do I do?
                </Heading>
                <Text>
                    I have been doing Frontend Development since my third year in undergraduate, and ML/DL related projects in my fourth year. However, I expanded my skills into Backend Developement in the early of my Master's Degree because I wanted to know how data are handled from user interfaces then back to the database to be processed to improve user experience.
                </Text>
                <Text>
                    For now, I have been working mostly on a Backend system that controls how and when ML/DL models should be run for my thesis.
                </Text>
            </Stack>

            <Stack my={5}>
                <Heading as="h1">
                    Why do I blog?
                </Heading>
                <Text>
                    As a software engineer, I am required to learn as much as I can in the shortest amount of time as possible. Sometimes I can't retain so much information for a longer period of time if I don't use it too often. So, I will make this blog as a kind of a notebook where, not only me, everyone can learn and use for reference.
                </Text>
                <Text>
                    I hope that everyone will find some of the posts useful. If you find errors in one of the post or that one of my posts interesting, I welcome emails or comments so long that they are relevant to the topic of the post.
                </Text>
            </Stack>
        </Layout>
    )
}

export default About