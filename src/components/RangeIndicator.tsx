import { Box, Slider, Stack, Typography, } from '@mui/material';
import React, { ReactNode, } from 'react';

import type { Profession, } from '../@types';

export const RangeIndicator = (props : Profession & {
    color?  : string,
    min     : number,
    max     : number,
    format? : (value : number) => ReactNode,
}) => (
    <Stack
        paddingY={2}
        direction='column'>
        <Stack
            display='flex'
            direction='row'>
            <Box flexGrow={1}>
                <Typography
                    color={props.color}
                    variant='body1'>
                    {props.name}
                </Typography>
            </Box>
            <Box flexGrow={0}>
                <Typography
                    color={props.color}
                    variant='body1'>
                    {props.format ? props.format(props.salaries.avg) : props.salaries.avg}
                </Typography>
            </Box>
        </Stack>
        <Slider
            sx={{
                height : 8,
            }}
            color='primary'
            min={props.min}
            max={props.max}
            value={[
                props.salaries.min,
                props.salaries.max,
            ]}
            valueLabelDisplay='auto'
            valueLabelFormat={props.format} />
    </Stack>
);
