import React from 'react';
import {
    alpha,
    AppBar,
    Box,
    Container,
    dividerClasses,
    IconButton,
    InputBase,
    styled,
    Toolbar,
    Typography
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'


const Headers = () => {

    return (
        <>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Container sx={{flexGrow: 1}}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                            >
                                MUI
                            </Typography>
                        </Container>
                    </Toolbar>
                </AppBar>
            </div>

        </>

    );
};

export default Headers;