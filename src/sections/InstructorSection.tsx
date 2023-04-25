import { OpenInNew as OpenInNewIcon, } from '@mui/icons-material';
import { Avatar, Box, Container, Grid, Link, Stack, Typography, useMediaQuery, } from '@mui/material';
import mixpanel from 'mixpanel-browser';
import React, { Fragment, } from 'react';
import { useTranslation, } from 'react-i18next';

import type { Section, } from '../@types';
import { experiences, } from '../data';

export const InstructorSection = ({
    category,
    title,
} : Section) => {
    const desktopMode = useMediaQuery('(min-width:900px)');

    const { t, } = useTranslation();

    const descriptions : string[] = t('instructor_descriptions', {
        returnObjects : true,
    });

    const handleClick = () => {
        if (process.env.REACT_APP_MIXPANEL_TOKEN) mixpanel.track('Referral/LinkedIn');

        return true;
    };

    const heading = (
        <Fragment>
            <Typography
                gutterBottom
                marginTop={4}
                color='secondary'
                variant='subtitle1'
                fontWeight='bold'>
                {category}
            </Typography>
            <Typography
                variant='h3'
                fontWeight='bold'>
                {title}
            </Typography>
        </Fragment>
    );

    const avatar = (
        <Avatar
            sx={{
                width      : desktopMode ? 480 : '100%',
                height     : desktopMode ? 480 : '100%',
                margin     : desktopMode ? 8 : undefined,
                marginLeft : desktopMode ? 4 : undefined,
                marginTop  : desktopMode ? undefined : 4,
            }}
            alt={t<string>('instructor_header')}
            src='/images/Profile-Business-Small.webp' />
    );

    const logos = (
        <Grid
            container
            marginBottom={4}
            rowSpacing={{
                xs : 3,
                sm : 4,
                md : 5,
            }}
            columnSpacing={{
                xs : 1,
                sm : 2,
                md : 3,
            }}
            justifyContent='space-around'>
            {experiences.map(experience => (
                <Grid
                    key={experience.key}
                    container
                    item
                    xs={6}
                    alignItems='center'
                    textAlign='center'>
                    <Box sx={{
                        marginX : 'auto',
                    }}>
                        <img
                            style={{
                                width     : desktopMode ? 180 : 120,
                                objectFit : desktopMode ? 'contain' : 'scale-down',
                            }}
                            alt={t<string>(experience.key)}
                            src={experience.path} />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );

    const description = (
        <Typography
            marginTop={4}
            variant='body1'>
            <Link
                underline='hover'
                href='https://www.linkedin.com/in/ayltai/'
                target='_blank'
                onClick={handleClick}>
                {t('instructor_name')}
                <OpenInNewIcon fontSize='small' />
            </Link>
            {descriptions.map(desc => (
                <Fragment key={desc}>
                    {desc}<br /><br />
                </Fragment>
            ))}
        </Typography>
    );

    return (
        <Container maxWidth='lg'>
            {desktopMode && (
                <Grid container>
                    <Grid
                        item
                        xs={6}>
                        <Box
                            width='100%'
                            flexDirection='column'>
                            {avatar}
                            {logos}
                        </Box>
                    </Grid>
                    <Grid
                        item
                        paddingX={8}
                        paddingTop={2}
                        paddingBottom={8}
                        xs={6}
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'>
                        {heading}
                        {description}
                    </Grid>
                </Grid>
            )}
            {!desktopMode && (
                <Stack
                    direction='column'
                    justifyContent='center'
                    textAlign='center'>
                    {heading}
                    {avatar}
                    {description}
                    {logos}
                </Stack>
            )}
        </Container>
    );
};
