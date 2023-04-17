import { Box, Container, Stack, Typography, useMediaQuery, } from '@mui/material';
import React, { ReactNode, } from 'react';

import type { Section, } from '../@types';
import { FormGenerator, FormGeneratorProps, } from '../components/FormGenerator';

export const ContactSection = ({
    background,
    category,
    title,
    description,
    definition,
    contactAction,
    onSubmit,
} : Section & FormGeneratorProps & {
    background?    : string,
    category?      : string,
    contactAction? : ReactNode,
}) => {
    const desktopMode = useMediaQuery('(min-width:900px)');

    return (
        <Box
            sx={{
                background,
            }}
            paddingY={8}>
            <Container maxWidth='lg'>
                <Stack
                    padding={desktopMode ? 2 : 1}
                    direction={desktopMode ? 'row' : 'column'}>
                    <Stack
                        width={desktopMode ? '50%' : '100%'}
                        padding={desktopMode ? 2 : 0}
                        direction='column'>
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
                        <Typography variant='h6'>
                            {description}
                        </Typography>
                        {contactAction && (
                            <Box paddingY={4}>
                                {contactAction}
                            </Box>
                        )}
                    </Stack>
                    <Box
                        width={desktopMode ? '50%' : '100%'}
                        padding={desktopMode ? 2 : 0}>
                        <FormGenerator
                            definition={definition}
                            onSubmit={onSubmit} />
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};
