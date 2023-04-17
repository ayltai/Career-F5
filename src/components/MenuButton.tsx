import { Button, Typography, } from '@mui/material';
import React from 'react';

import type { RouteItem, } from '../@types';

export const MenuButton = (props : RouteItem) => {
    const handleClick = () => {
        if (props.route) window.location.href = props.route;
    };

    return (
        <Button
            color='inherit'
            size='large'
            onClick={handleClick}>
            <Typography variant='button'>
                {props.text}
            </Typography>
        </Button>
    );
};
