import { Menu as MenuIcon, } from '@mui/icons-material';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, useScrollTrigger, } from '@mui/material';
import React, { cloneElement, Fragment, MouseEvent, ReactElement, ReactNode, useState, } from 'react';

import type { RouteItem, } from '../@types';
import { LanguageSwitcher, } from './LanguageSwitcher';
import { MenuButton, } from './MenuButton';

const ElevationScroll = ({
    children,
} : {
    children : ReactElement,
}) => {
    const trigger = useScrollTrigger({
        disableHysteresis : true,
        threshold         : 0,
    });

    return cloneElement(children, {
        elevation : trigger ? 4 : 0,
    });
};

export const TopBar = ({
    branding,
    menu,
    callToAction,
} : {
    branding?     : ReactNode,
    menu?         : RouteItem[],
    callToAction? : ReactNode,
}) => {
    const [ anchorElement, setAnchorElement, ] = useState<HTMLElement | null>(null);

    const handleGoHome = () => window.location.href = '#home';

    const handleOpenMenu = (event : MouseEvent<HTMLElement>) => setAnchorElement(event.currentTarget);

    const handleCloseMenu = () => setAnchorElement(null);

    return (
        <Fragment>
            <ElevationScroll>
                <AppBar color='inherit'>
                    <Container
                        sx={{
                            paddingLeft : 0,
                        }}
                        maxWidth='lg'>
                        <Toolbar disableGutters>
                            <Button
                                sx={{
                                    flexGrow : 0,
                                }}
                                size='large'
                                color='inherit'
                                onClick={handleGoHome}>
                                {branding}
                            </Button>
                            <Box sx={{
                                display  : {
                                    xs : 'none',
                                    sm : 'none',
                                    md : 'flex',
                                },
                                flexGrow : 1,
                            }}>
                                <Box sx={{
                                    margin : 'auto',
                                }}>
                                    {menu && menu.map(menuItem => (
                                        <MenuButton
                                            key={menuItem.route || menuItem.text}
                                            {...menuItem} />
                                    ))}
                                </Box>
                            </Box>
                            <Box sx={{
                                display  : {
                                    xs : 'flex',
                                    sm : 'flex',
                                    md : 'none',
                                },
                                flexGrow : 1,
                            }}>
                                <LanguageSwitcher />
                                {menu && (
                                    <Box sx={{
                                        marginLeft  : 1,
                                        marginRight : 0,
                                    }}>
                                        <IconButton
                                            size='large'
                                            edge='end'
                                            color='inherit'
                                            onClick={handleOpenMenu}>
                                            <MenuIcon />
                                        </IconButton>
                                        <Menu
                                            sx={{
                                                display : {
                                                    xs : 'block',
                                                    sm : 'block',
                                                    md : 'none',
                                                },
                                            }}
                                            keepMounted
                                            open={Boolean(anchorElement)}
                                            anchorEl={anchorElement}
                                            anchorOrigin={{
                                                horizontal : 'left',
                                                vertical   : 'bottom',
                                            }}
                                            transformOrigin={{
                                                horizontal : 'left',
                                                vertical   : 'top',
                                            }}
                                            onClose={handleCloseMenu}>
                                            {menu.map(menuItem => {
                                                const handleNavigate = () => {
                                                    if (menuItem.route) window.location.href = menuItem.route;

                                                    handleCloseMenu();
                                                };

                                                return (
                                                    <MenuItem
                                                        key={menuItem.route || menuItem.text}
                                                        onClick={handleNavigate}>
                                                        {menuItem.text}
                                                    </MenuItem>
                                                );
                                            })}
                                        </Menu>
                                    </Box>
                                )}
                            </Box>
                            <Box sx={{
                                display  : {
                                    xs : 'none',
                                    sm : 'none',
                                    md : 'flex',
                                },
                                flexGrow : 0,
                            }}>
                                {callToAction}
                            </Box>
                            <Box sx={{
                                display  : {
                                    xs : 'none',
                                    sm : 'none',
                                    md : 'flex',
                                },
                                flexGrow : 0,
                            }}>
                                <LanguageSwitcher />
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </Fragment>
    );
};
