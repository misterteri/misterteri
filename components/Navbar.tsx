import {
    Box,
    Flex,
    Avatar,
    Button,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Center

} from '@chakra-ui/react'
import Navlink from './Navlink'
import Link from 'next/link'
import styled from '@emotion/styled'
import Switch from './Switch'

const Navbar = styled(Box)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height .5s, line-height .5s;
`

const Navigation: React.FC = () => {
    return (
        <Navbar
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            height="100%"
            width="100%"
            as="nav"
        >
            <Flex
                py={2}
                px={5}
                maxW="container.sm"
                align="center"
                mx="auto"
            >
                <Flex>Logo</Flex>
                <Flex marginLeft="auto">
                    <Flex
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Navlink href="/">Home</Navlink>
                        <Navlink href="/about">About</Navlink>
                        <Navlink href="/resume">Resume</Navlink>
                        <Navlink href="/portfolio">Portfolio</Navlink>
                    </Flex>
                    <Switch />
                    <Menu>
                        <MenuButton
                            // show menu only when container is smaller than 768px
                            display={{ base: 'none', md: 'none', sm: 'flex' }}
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}
                        >
                        <Avatar
                            size={'sm'}
                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                        />
                        </MenuButton>
                        <MenuList alignItems={'center'}>
                        <br />
                        <Center>
                            <Avatar
                                size={'2xl'}
                                src={'https://avatars.dicebear.com/api/male/username.svg'}
                            />
                        </Center>
                        <br />
                        <Center>
                            <Text as="p">Bijon Setyawan Raya</Text>
                        </Center>
                        <br />
                        <MenuDivider />
                        <MenuItem>
                            <Link href="/">
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/about">
                                About
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/resume">
                                Resume
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/portfolio">
                                Portfolio
                            </Link>
                        </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Navbar>
    )
}

export default Navigation