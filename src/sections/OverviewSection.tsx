import { Box, Container, Stack, Typography, useMediaQuery ,} from '@mui/material';
import React from 'react';

import type { Section, } from '../@types';

export const OverviewSection = ({
    category,
    title,
    description,
    image,
} : Section & {
    image : string,
}) => {
    const desktopMode = useMediaQuery('(min-width:900px)');

    return desktopMode ? (
        <Box
            width='100%'
            marginY={8}
            height={512}>
            <Container maxWidth='lg'>
                <Stack direction='row'>
                    <Box
                        width='40%'
                        display='flex'>
                        <Box
                            height={512}
                            marginX='auto'
                            alignItems='center'>
                            <img
                                style={{
                                    borderRadius : 32,
                                }}
                                width={314}
                                height={480}
                                alt={'dummy'}
                                src={image} />
                        </Box>
                    </Box>
                    <Stack
                        width='60%'
                        marginTop={-4}
                        paddingRight={8}
                        direction='column'
                        justifyContent='center'>
                        <Typography
                            gutterBottom
                            color='secondary'
                            variant='subtitle1'
                            fontWeight='bold'>
                            {category}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant='h3'
                            fontWeight='bold'>
                            {title}
                        </Typography>
                        <Typography variant='body1'>
                            {description}
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    ) : (
        <Box width={'100%'}>
            <Stack
                padding={2}
                direction='column'
                justifyContent='center'
                textAlign='center'>
                <Typography
                    gutterBottom
                    color='secondary'
                    variant='subtitle1'
                    fontWeight='bold'>
                    {category}
                </Typography>
                <Typography
                    gutterBottom
                    variant='h3'
                    fontWeight='bold'>
                    {title}
                </Typography>
                <Typography variant='body1'>
                    {description}
                </Typography>
                <Box
                    height={512}
                    marginX='auto'
                    marginY={4}
                    alignItems='center'>
                    <img
                        style={{
                            borderRadius : 32,
                        }}
                        width={314}
                        height={480}
                        alt={'dummy'}
                        src={image} />
                </Box>
            </Stack>
        </Box>
    );
};
