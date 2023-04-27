import { WhatsApp as WhatsAppIcon, } from '@mui/icons-material';
import { Button, Fab, Typography, } from '@mui/material';
import mixpanel from 'mixpanel-browser';
import React from 'react';
import { useTranslation, } from 'react-i18next';

export const ContactAction = ({
    variant = 'button',
} : {
    variant? : 'button' | 'fab',
}) => {
    const { t, } = useTranslation();

    const handleClick = () => {
        window.gtag('event', 'conversion', {
            'send_to' : process.env.REACT_APP_GTAG_CONVERSION,
        });

        if (process.env.REACT_APP_MIXPANEL_TOKEN) mixpanel.track('WhatsApp');

        if (process.env.REACT_APP_WHATSAPP_PHONE_NUMBER) {
            const newWindow = window.open(`https://wa.me/${process.env.REACT_APP_WHATSAPP_PHONE_NUMBER}`, '_blank', 'noopener,noreferrer');
            if (newWindow) newWindow.opener = null;
        }
    };

    return variant === 'button' ? (
        <Button
            variant='contained'
            color='secondary'
            startIcon={
                <WhatsAppIcon sx={{
                    color : 'white',
                }} />
            }
            onClick={handleClick}>
            <Typography
                color='white'
                variant='button'>
                {t('whatsapp')}
            </Typography>
        </Button>
    ) : (
        <Fab
            sx={{
                display  : {
                    sx : 'block',
                    md : 'none',
                },
                position : 'fixed',
                right    : 32,
                bottom   : 32,
            }}
            color='secondary'
            onClick={handleClick}>
            <WhatsAppIcon sx={{
                color : 'white',
            }} />
        </Fab>
    );
};
