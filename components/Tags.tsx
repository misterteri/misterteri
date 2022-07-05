import NextLink from 'next/link'
import { Button, Flex, Text } from '@chakra-ui/react'

// pass props as an object
export default function Tags({ tags }: { tags: string[] }) {
    return (
        <Flex>
            {
                tags.map((tag: string, index: any) => {
                    return (
                        <NextLink
                            href={'/tag/' + tag}
                            key={index}
                            passHref
                        >
                            <Button
                                mr={2}
                                variant="ghost"
                                _hover={{
                                    color: 'gray.800',
                                    bg: "#fdd2d8",
                                }}
                            >
                                <Text color={"#b0646f"}>#</Text>
                                <Text>{tag}</Text>
                            </Button>
                        </NextLink>
                    )
                })
            }
        </Flex>
    )
}