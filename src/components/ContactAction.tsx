import { WhatsApp as WhatsAppIcon, } from '@mui/icons-material';
import { Button, Typography, } from '@mui/material';
import React from 'react';
import { useTranslation, } from 'react-i18next';

import { useAdTag, } from '../hooks';

export const ContactAction = () => {
    const gtag = useAdTag(process.env.REACT_APP_GTAG);

    const { t, } = useTranslation();

    const handleClick = () => {
        if (gtag && process.env.REACT_APP_GTAG_CONVERSION) gtag('event', 'conversion', {
            send_to : process.env.REACT_APP_GTAG_CONVERSION,
        });

        if (process.env.REACT_APP_WHATSAPP_PHONE_NUMBER) {
            const newWindow = window.open(`https://wa.me/${process.env.REACT_APP_WHATSAPP_PHONE_NUMBER}`, '_blank', 'noopener,noreferrer');
            if (newWindow) newWindow.opener = null;
        }
    };

    return (
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
    );
};
