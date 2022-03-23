import {Box} from '@chakra-ui/layout';
import Sidebar from './sidebar';

const PlayerLayout = ({children}) => {
    return (
        <Box width="100vw" height="100vh">
        {/* sidebar */}
        <Box position="absolute" top="0" width="250px">
            <Sidebar />
        </Box>
        {/* main content */}
        <Box marginLeft="250px" marginBottom="100px">
            {children}
        </Box>
        {/* player */}
        <Box position="absolute" left="0" bottom="0">
            player
        </Box>
        </Box>
    );
}

export default PlayerLayout;