import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'

import pallete from '../../theme/pallete';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const CustomLayout = ({ children }: Props) => {
    return (
        <Box sx={{ height: '100vh', width: '100vw', display: 'flex', backgroundColor: pallete.primary.dark }}>
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {children}
            </Box>
        </Box>
    )
}
