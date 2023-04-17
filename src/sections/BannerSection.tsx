import { Place as PlaceIcon, Schedule as ScheduleIcon, WorkOutline as WorkIcon, } from '@mui/icons-material';
import { Box, Container, Stack, Typography, useMediaQuery, } from '@mui/material';
import React, { ReactNode, } from 'react';
import { useTranslation, } from 'react-i18next';

import type { Section, } from '../@types';

export const BannerSection = ({
    title,
    description,
    background,
    foregroundImage,
    callToAction,
} : Section & {
    background?      : string,
    foregroundImage? : string,
    callToAction?    : ReactNode,
}) => {
    const desktopMode = useMediaQuery('(min-width:900px)');

    const { t, } = useTranslation();

    const info = (
        <Stack
            alignItems={desktopMode ? undefined : 'center'}
            direction='column'>
            <Typography
                display='flex'
                alignItems='center'
                color='text.secondary'
                variant='body2'>
                <ScheduleIcon />&nbsp;{t('banner_part_time')}
            </Typography>
            <Typography
                display='flex'
                alignItems='center'
                color='text.secondary'
                variant='body2'>
                <PlaceIcon />&nbsp;{t('banner_remote')}
            </Typography>
            <Typography
                display='flex'
                alignItems='center'
                color='text.secondary'
                variant='body2'>
                <WorkIcon />&nbsp;{t('banner_interview')}
            </Typography>
        </Stack>
    );

    return desktopMode ? (
        <Box
            sx={{
                background,
            }}
            height={512}>
            <Container maxWidth='lg'>
                <Stack
                    paddingLeft={2}
                    direction='row'>
                    <Stack
                        width='60%'
                        direction='column'
                        justifyContent='center'>
                        <Typography
                            gutterBottom
                            variant='h2'
                            fontWeight='bold'>
                            {title}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant='h6'>
                            {description}
                        </Typography>
                        {callToAction && (
                            <Box paddingY={3}>
                                {callToAction}
                            </Box>
                        )}
                        {info}
                    </Stack>
                    <Box
                        width='40%'
                        display='flex'>
                        <Box
                            height={512}
                            marginX='auto'
                            marginRight={0}
                            alignItems='center'>
                            <img
                                style={{
                                    marginTop : 32,
                                }}
                                width={317}
                                height={480}
                                alt={title}
                                src={foregroundImage} />
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </Box>
    ) : (
        <Box sx={{
            background,
        }}>
            <Stack
                padding={2}
                direction='column'
                justifyContent='center'
                textAlign='center'>
                <Typography
                    gutterBottom
                    variant='h2'
                    fontWeight='bold'>
                    {title}
                </Typography>
                <Typography
                    gutterBottom
                    variant='h6'>
                    {description}
                </Typography>
                <Box
                    paddingTop={2}
                    paddingBottom={3}>
                    {callToAction}
                </Box>
                {info}
                <Box
                    height={512}
                    marginX='auto'
                    marginBottom={-2}
                    alignItems='center'>
                    <img
                        style={{
                            marginTop : 32,
                        }}
                        width={317}
                        height={480}
                        alt={title}
                        src={foregroundImage} />
                </Box>
            </Stack>
        </Box>
    );
};
