import { RocketLaunch as RocketLaunchIcon, } from '@mui/icons-material';
import { Button, Typography, } from '@mui/material';
import React from 'react';
import { useTranslation, } from 'react-i18next';

export const ApplyAction = ({
    onClick,
} : {
    onClick : () => void,
}) => {
    const { t, } = useTranslation();

    return (
        <Button
            color='primary'
            variant='contained'
            startIcon={
                <RocketLaunchIcon sx={{
                    color : 'white',
                }} />
            }
            onClick={onClick}>
            <Typography
                color='white'
                variant='button'>
                {t('action_apply')}
            </Typography>
        </Button>
    );
};
