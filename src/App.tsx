import { Button, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, Theme, ThemeProvider, Typography, } from '@mui/material';
import mixpanel from 'mixpanel-browser';
import React, { Fragment, useEffect, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import { ApplyAction, ApplyDialog, ContactAction, Footer, TopBar, } from './components';
import { applicationDefinition, } from './data';
import { Home, } from './screens';
import { useAppSelector, } from './hooks';
import { AppTheme, } from './styles';
import { handleError, } from './utils';

const contactAction = <ContactAction />;

export const App = () => {
    const language = useAppSelector(state => state.preferences.language);

    const [ applyOpen, setApplyOpen, ] = useState<boolean>(false);
    const [ errorOpen, setErrorOpen, ] = useState<boolean>(false);
    const [ appTheme,  setAppTheme,  ] = useState<Theme>(AppTheme(language));

    const { t, i18n, } = useTranslation();

    const handleApplyOpen = () => setApplyOpen(true);

    const handleApplyClose = () => setApplyOpen(false);

    const handleErrorClose = () => setErrorOpen(false);

    const handleSubmit = (data : Record<string, string>) => fetch('https://corsproxy.io/?https://docs.google.com/forms/u/0/d/e/1FAIpQLSf2J4dcklFWXhHhO6glY5zJa6T9zreNR5uP-j8k3Eu_m1jgzQ/formResponse', {
        method  : 'POST',
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded',
        },
        body    : new URLSearchParams(data).toString(),
    }).then(() => {
        setApplyOpen(false);

        return true;
    }).catch(e => {
        handleError(e);

        setErrorOpen(true);

        return false;
    }).finally(() => {
        window.gtag('event', 'conversion', {
            send_to : process.env.REACT_APP_GTAG_CONVERSION,
        });

        if (process.env.REACT_APP_MIXPANEL_TOKEN) mixpanel.track('Apply');
    });

    const applyAction = (
        <ApplyAction onClick={handleApplyOpen} />
    );

    useEffect(() => {
        if (process.env.REACT_APP_MIXPANEL_TOKEN) mixpanel.track('Home');
    }, []);

    useEffect(() => {
        i18n.changeLanguage(language).catch(handleError);
        setAppTheme(AppTheme(language));
    }, [ language, ]);

    return (
        <Fragment>
            <CssBaseline />
            <ThemeProvider theme={appTheme}>
                <a id='home' />
                <TopBar
                    branding={
                        <Fragment>
                            <Typography
                                marginRight={2}
                                variant='h4'
                                fontFamily='"Lobster Two"'
                                fontWeight='bold'>
                                {t('branding')}
                            </Typography>
                            <img
                                width={40}
                                height={40}
                                alt={t<string>('branding')}
                                src='/safari-pinned-tab.svg' />
                        </Fragment>
                    }
                    menu={[
                        {
                            text  : t<string>('courses'),
                            route : '#courses',
                        },
                        {
                            text  : t<string>('contact'),
                            route : '#contact',
                        },
                        {
                            text  : t<string>('about'),
                            route : '#instructor',
                        },
                    ]}
                    callToAction={
                        <Stack
                            spacing={2}
                            direction='row'>
                            {applyAction}
                            {contactAction}
                        </Stack>
                    }
                />
                <ContactAction variant='fab' />
                <Home
                    applyAction={applyAction}
                    contactAction={contactAction} />
                <Footer />
                <ApplyDialog
                    open={applyOpen}
                    onClose={handleApplyClose}
                    title={t<string>('apply_title')}
                    description={t<string>('apply_description')}
                    definition={applicationDefinition}
                    onSubmit={handleSubmit} />
                <Dialog
                    open={errorOpen}
                    onClose={handleErrorClose}>
                    <DialogTitle>
                        {t<string>('error_title')}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {t<string>('error_apply_failed')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleErrorClose}>
                            {t<string>('action_close')}
                        </Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </Fragment>
    );
};
