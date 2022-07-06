import { Avatar, Wrap, WrapItem, Box, Text, Tooltip, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

type author = {
    name: string,
    image: string,
    url: string,
}

export default function Authors(props: any): JSX.Element {
    const authorsInfo: author[] = [
        {
            name: "Bijon Setyawan Raya",
            image: "https://bsraya.vercel.app/images/avatar.png",
            url: "/",
        },
        {
            name: "Annabella Putri Dirgo",
            image: "https://i.ibb.co/FhfYZ8L/logo.png",
            url: "https://bellapd.vercel.app",
        }
    ]

    return (
        <Box mb={5}>
            <Text mb={2} fontSize="sm" color="gray.500">Author(s):</Text>
            <Wrap>
                {
                    (props.authors.length === 1 && props.authors[0] === authorsInfo[0].name) ?
                    (
                        <WrapItem>
                            <NextLink
                                href={authorsInfo[0].url}
                                passHref
                            >
                                <Avatar
                                    name={authorsInfo[0].name}
                                    src={authorsInfo[0].image}
                                    _hover={{
                                        cursor: "pointer",
                                    }}
                                />
                            </NextLink>
                            <Text ml={3} my="auto">{authorsInfo[0].name}</Text>
                        </WrapItem>
                    ) : props.authors.map((name: string) => {
                        if (name === authorsInfo[0].name) {
                            return (
                                <Tooltip
                                    key={name}
                                    label={authorsInfo[0].name}
                                >
                                    <WrapItem
                                        _hover={{
                                            cursor: "pointer",
                                        }}
                                    >
                                        <NextLink
                                            href={authorsInfo[0].url}
                                            passHref
                                        >
                                            <Avatar
                                                name={authorsInfo[0].name}
                                                src={authorsInfo[0].image}
                                            />
                                        </NextLink>
                                    </WrapItem>
                                </Tooltip>
                            )
                        }
                        if (name === authorsInfo[1].name) {
                            return (
                                <Tooltip
                                    key={name}
                                    label={authorsInfo[1].name}
                                >
                                    <Link
                                        href={authorsInfo[1].url}
                                        target="_blank"
                                        isExternal
                                    >
                                        <WrapItem>
                                            <Avatar
                                                name={authorsInfo[1].name}
                                                src={authorsInfo[1].image}
                                            />
                                        </WrapItem>
                                    </Link>
                                </Tooltip>
                            )
                        }
                    })
                }
            </Wrap>
        </Box>
    )
}