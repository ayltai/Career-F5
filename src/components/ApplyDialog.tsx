import { Close as CloseIcon, } from '@mui/icons-material';
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Typography, useMediaQuery, useTheme, } from '@mui/material';
import React from 'react';
import { useTranslation, } from 'react-i18next';

import { FormGenerator, FormGeneratorProps, } from './FormGenerator';

export const ApplyDialog = ({
    open = false,
    onClose,
    title,
    description,
    definition,
    onSubmit,
} : FormGeneratorProps & {
    open?    : boolean,
    onClose? : () => void,
}) => {
    const theme = useTheme();

    const desktopMode = useMediaQuery('(min-width:900px)');

    const { t, } = useTranslation();

    return (
        <Dialog
            open={open}
            onClose={onClose}>
            <DialogTitle>
                <Box
                    paddingX={desktopMode ? 4 : 1}
                    paddingTop={desktopMode ? 4 : 1}>
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                    <IconButton
                        sx={{
                            position : 'absolute',
                            right    : desktopMode ? 16 : 8,
                            top      : desktopMode ? 16 : 8,
                            color    : theme.palette.text.secondary,
                        }}
                        onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography
                        gutterBottom
                        paddingX={desktopMode ? 8 : 4}
                        color='text.secondary'
                        variant='subtitle1'
                        fontStyle='italic'>
                        {t('apply_note')}
                    </Typography>
                    <Typography
                        gutterBottom
                        paddingX={desktopMode ? 4 : 1}
                        paddingTop={2}
                        color='text.primary'
                        variant='body1'>
                        {description}
                    </Typography>
                </DialogContentText>
                <FormGenerator
                    elevated={false}
                    definition={definition}
                    onSubmit={onSubmit} />
            </DialogContent>
        </Dialog>
    );
};
