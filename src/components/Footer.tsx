import { Box, Container, Typography, } from '@mui/material';
import React from 'react';
import { useTranslation, } from 'react-i18next';

export const Footer = () => {
    const { t, } = useTranslation();

    return (
        <Box
            sx={{
                backgroundColor: 'black',
            }}
            width='100%'>
            <Container maxWidth='lg'>
                <Box
                    paddingY={4}
                    textAlign='center'>
                    <Typography
                        color='white'
                        variant='overline'>
                        {t('copyright')}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
