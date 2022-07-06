import {
    Box,
    Button,
    List,
    ListItem,
    Heading,
    Link,
    Text,
    Divider,
    useColorMode,
    Kbd,
    Textarea,
    Alert,
    Stack,
    AlertIcon,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    BoxProps,
    useColorModeValue,
    textDecoration
} from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import Series from './Series'

const CustomLink = (props: any) => {
    const { colorMode } = useColorMode();
    const color = {
        light: 'blue.500',
        dark: 'blue.300'
    };

    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <NextLink {...props} href={href} passHref>
                <Link color={color[colorMode]} {...props} />
            </NextLink>
        );
    }

    return <Link color={color[colorMode]} isExternal {...props} />;
};

const CustomImages = (props: any) => {
    if (props.title !== undefined) {
        return (
            <figure>
                <img
                    src={props.src}
                    alt={props.alt}
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                    width="100%"
                    height="auto"
                    loading='lazy'
                />
                <figcaption
                    style={{
                        textAlign: "center",
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                        fontStyle: "italic",
                    }}
                >
                    figure: {props.title}
                </figcaption>
            </figure>
        );
    } else {
        return <img
            src={props.src}
            alt={props.alt}
            style={{ marginLeft: "auto", marginRight: "auto" }}
            width="100%"
            height="auto"
            loading='lazy'
        />;
    }
}

const Quote = (props: any) => {
    const { colorMode } = useColorMode();
    const bgColor = {
        light: 'blue.50',
        dark: 'blue.900'
    };

    return (
        <Alert
            mt={4}
            w="98%"
            bg={bgColor[colorMode]}
            variant="left-accent"
            status="info"
            css={{
                '> *:first-of-type': {
                marginTop: 0,
                marginLeft: 8
                }
            }}
            {...props}
        />
    );
};

const DocsHeading = (props: any) => {
    const { colorMode } = useColorMode();
    const color = {
        light: 'blue.500',
        dark: 'blue.300'
    };
    return (
        <Heading
            css={{
                scrollMarginTop: '100px',
                scrollSnapMargin: '100px', // Safari
                '&[id]': {
                    pointerEvents: 'none'
                },
                '&[id]:before': {
                    display: 'block',
                    visibility: 'hidden',
                    content: `""`
                },
                '&[id]:hover a': { opacity: 1 }
            }}
            {...props}
            mt="1.5em"
        >
            <Box pointerEvents="auto">
                {props.children}
                {props.id && (
                    <Box
                        aria-label="anchor"
                        as="a"
                        color={color[colorMode]}
                        fontWeight="normal"
                        outline="none"
                        _focus={{
                            opacity: 1,
                            boxShadow: 'outline'
                        }}
                        opacity="0"
                        ml="0.375rem"
                        href={`#${props.id}`}
                    >
                        #
                    </Box>
                )}
            </Box>
        </Heading>
    )
}

const Hr = () => {
    const { colorMode } = useColorMode();
    const borderColor = {
        light: 'gray.400',
        dark: 'gray.600'
    };

    return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const MDXComponent = {
    i: (props: any) => <Text as="i" {...props} />,
    br: (props: any) => <Box height="24px" {...props} />,
    small: (props: any) => <Text as="small" {...props} />,
    p: (props: any) => <Text as="p" my={5} lineHeight="taller" {...props} />,
    strong: (props: any) => <Text as="strong" fontWeight="semibold" {...props} />,
    
    li: (props: any) => <ListItem ml={6} {...props} />,
    ul: (props: any) => <List as="ul" styleType="circle" mt={5} spacing={1} {...props} />,
    ol: (props: any) => <List as="ol" styleType="decimal" mt={5} spacing={1} {...props} />,
    
    h1: (props: any) => <DocsHeading as="h1" size="xl" fontWeight="bold" {...props} />,
    h2: (props: any) => <DocsHeading as="h2" size="lg" fontWeight="bold" {...props} />,
    h3: (props: any) => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
    h4: (props: any) => <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />,
    h5: (props: any) => <DocsHeading as="h5" size="xs" fontWeight="bold" {...props} />,
    h6: (props: any) => <DocsHeading as="h6" size="xs" fontWeight="bold" {...props} />,
    
    // for table
    tr: (props: any) => <Tr {...props} />,
    th: (props: any) => <Th {...props} />,
    td: (props: any) => <Td {...props} />,
    thead: (props: any) => <Thead  {...props} />,
    tbody: (props: any) => <Tbody {...props} />,
    tfoot: (props: any) => <Tfoot {...props} />,
    caption: (props: any) => <TableCaption {...props} />,
    table: (props: any) => <TableContainer><Table variant="striped" {...props} /></TableContainer>,
    
    Kbd,
    Text,
    Stack,
    Textarea,
    AlertIcon,
    Box,
    Button,
    NextLink,
    Series,
    hr: Hr,
    a: CustomLink,
    blockquote: Quote,
    img: (props: any) => <CustomImages {...props} />,
    Alert: (props: any) => <Alert my={5} {...props} />,
};

export default MDXComponent;