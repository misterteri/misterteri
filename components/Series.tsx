import { Heading, Box, Divider, Text, Flex, LinkBox, LinkOverlay, IconButton } from "@chakra-ui/react";
import NextLink from 'next/link';

interface IPost {
    title: string;
    slug: string;
}

const Title = ({ props, title }: { props: any, title: string }) => {
    return (
        <Text
            my="auto"
            css={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            }}
            {...props}
        >
            {title}
        </Text>
    )
}

const CurrentPost = ({index, title}: {index: number, title: string}) => {
    return(
        <>
            <IconButton
                aria-label="post index"
                icon={<Text mx="auto">{index}</Text>}
                isRound
                background="blue.500"
                color="gray.100"
                mx={3}
                _hover={{
                    background: "gray.300"
                }}
            />
            <Title
                props={{
                    color: "blue.500",
                    fontWeight: "bold"
                }}
                title={title}
            />
        </>
    )
}

const NotCurrentPost = ({ index, title }: { index: number, title: string }) => {
    return (
        <>
            <IconButton
                aria-label="post index"
                icon={<Text mx="auto">{index}</Text>}
                isRound
                background="gray.300"
                color="gray.700"
                mx={3}
                _hover={{
                    background: "gray.300"
                }}
            />
            <Title
                props={{
                    color: "gray.700"
                }}
                title={title}
            />
        </>
    )
}

// "Series" is a component that displays a list of related posts, just like the one from the "dev.to" website
export default function Series({ series, posts, currentPost }: { series: string, posts: IPost[], currentPost: string }) {
    return (
        <Box
            mx="auto"
            mt={10}
            rounded="lg"
            display="block"
            color="gray.700"
            border="1px solid"
            background="gray.100"
            borderColor="gray.300"
            width="90%"
        >   
            <Heading fontSize="lg" p={3} mx={2} color="blue.500">{series} ({posts.length} Part)</Heading>
            <Divider borderColor="gray.300" w="100%" />
            {
                posts.map((post: IPost) => {
                        var index = posts.indexOf(post) + 1;
                        return (
                            <NextLink key={index} href={"/blog/" + post.slug} >
                                <LinkBox key={post.slug} _hover={{ cursor: "pointer", background: "gray.50", color: "blue.500"}} rounded="lg">
                                    <LinkOverlay>
                                        <Flex mx={3} py={3}>
                                            {
                                                post.title === currentPost ?
                                                    <CurrentPost index={index} title={post.title} />
                                                    :
                                                    <NotCurrentPost index={index} title={post.title} />
                                            }
                                        </Flex>
                                    </LinkOverlay>
                                </LinkBox>
                            </NextLink>
                        )
                    }
                )
            }
        </Box>
    )
}