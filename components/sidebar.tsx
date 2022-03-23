
// Modules imports
import NextImage from "next/image";
import NextLink from "next/link";

import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay
} from '@chakra-ui/layout';

import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite
} from 'react-icons/md';

// Data Seed
const navMenu = [
    {
        name: 'Home',
        icon: MdHome,
        route:'/'
    },
    {
        name: 'Search',
        icon: MdSearch,
        route:'/search'
    },
    {
        name: 'Your Library',
        icon: MdLibraryMusic,
        route:'/library'
    },
]

const Sidebar = () => (
    <Box width="100%" height={"90vh"} bg="black" paddingX="5px" color="gray"> {/*layout*/}
        <Box paddingY="20px"> {/**content */}
            <Box width="120px" marginBottom="20px" paddingX="20px"> {/**image */}
                <NextImage src="/logo.svg" height={40} width={90}/>
            </Box>
            <Box marginBottom="20px"> {/** menu*/}
                <List spacing={2}>
                    {navMenu.map((menu_item) => (
                    <ListItem paddingX="20px" fontSize="16px" key={menu_item.name}>
                        <LinkBox>
                        <NextLink href={menu_item.route} passHref>
                            <LinkOverlay>
                            <ListIcon as={menu_item.icon} color="white" marginRight="20px"/>
                            {menu_item.name}
                            </LinkOverlay>
                        </NextLink>
                        </LinkBox>
                    </ListItem>
                    ))}
                </List>
            </Box> 
        </Box>
    </Box>
)

export default Sidebar;