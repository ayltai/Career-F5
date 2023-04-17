import { Box, Container, Grid, MenuItem, Select, SelectChangeEvent, Stack, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery, useTheme, } from '@mui/material';
import React, { MouseEvent, ReactNode, useState, } from 'react';
import { useTranslation, } from 'react-i18next';
import { useWindowSize, } from 'usehooks-ts';

import type { Section, Segmentation, } from '../@types';
import { RangeIndicator, } from '../components';

const maxs : {
    [ key : string] : number,
} = {
    'location_hongkong' : 2000000,
    'location_london'   : 200000,
    'location_toronto'  : 300000,
    'location_sydney'   : 400000,
};

export const ProspectSection = ({
    category,
    title,
    description,
    segmentations,
} : Section & {
    segmentations : Segmentation[],
}) => {
    const [ selectedSegment, setSelectedSegment, ] = useState('location_hongkong');
    const [ selectedPeriod,  setSelectedPeriod,  ] = useState<'month' | 'year' | string>('month');

    const theme       = useTheme();
    const desktopMode = useMediaQuery('(min-width:900px)');

    const { width, } = useWindowSize();

    const { t, } = useTranslation();

    const handleSegmentSelection = (_ : MouseEvent<HTMLElement>, value : string) => value && setSelectedSegment(value);

    const handlePeriodSelection = (_ : MouseEvent<HTMLElement>, value : 'month' | 'year') => value && setSelectedPeriod(value);

    const handleSegmentChange = (event : SelectChangeEvent) => event.target.value && setSelectedSegment(event.target.value);

    const handlePeriodChange = (event : SelectChangeEvent) => event.target.value && setSelectedPeriod(event.target.value);

    const formatValue = (value : number) : ReactNode => new Intl.NumberFormat(segmentations.find(segmentation => segmentation.location.name === selectedSegment)!.location.locale, {
        style                 : 'currency',
        currency              : segmentations.find(segmentation => segmentation.location.name === selectedSegment)!.location.currency,
        maximumFractionDigits : 0,
    }).format(value);

    const salaries = segmentations.find(segmentation => segmentation.location.name === selectedSegment)!.professions.map(profession => (
        <RangeIndicator
            key={profession.name}
            color={theme.palette.grey[200]}
            name={t(profession.name)}
            salaries={{
                min : profession.salaries.min / (selectedPeriod === 'year' ? 1 : 12),
                avg : profession.salaries.avg / (selectedPeriod === 'year' ? 1 : 12),
                max : profession.salaries.max / (selectedPeriod === 'year' ? 1 : 12),
            }}
            min={0}
            max={maxs[selectedSegment] / (selectedPeriod === 'year' ? 1 : 12)}
            format={formatValue} />
    ));

    return desktopMode ? (
        <Box
            sx={{
                background       : `linear-gradient(to right, transparent, rgba(69,90,100,0.15), rgb(69,90,100) ${width > 2560 ? (0.9 - (width - 1440) / width) * 100 : 45}%), url(/images/home-profession.webp)`,
                backgroundSize   : `auto ${Math.min(960, width / 1.5 / 1.5)}px`,
                backgroundRepeat : 'no-repeat',
            }}
            paddingY={8}>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid
                        item
                        xs={6}>
                        &nbsp;
                    </Grid>
                    <Grid
                        item
                        xs={6}>
                        <Stack direction='column'>
                            {category && (
                                <Typography
                                    gutterBottom
                                    color='secondary'
                                    variant='subtitle1'
                                    fontWeight='bold'>
                                    {category}
                                </Typography>
                            )}
                            {title && (
                                <Typography
                                    gutterBottom
                                    color={theme.palette.common.white}
                                    variant='h3'
                                    fontWeight='bold'>
                                    {title}
                                </Typography>
                            )}
                            {description && (
                                <Typography
                                    gutterBottom
                                    color='text.secondary'
                                    variant='subtitle1'>
                                    {description}
                                </Typography>
                            )}
                            <Stack
                                marginBottom={2}
                                spacing={2}
                                direction='row'>
                                <ToggleButtonGroup
                                    exclusive
                                    color='standard'
                                    value={selectedSegment}
                                    onChange={handleSegmentSelection}>
                                    {segmentations.map(segmentation => (
                                        <ToggleButton
                                            sx={{
                                                textTransform : 'none',
                                            }}
                                            key={segmentation.location.name}
                                            value={segmentation.location.name}>
                                            <Typography
                                                variant='subtitle1'
                                                color={theme.palette.common.white}>
                                                {t(segmentation.location.name)}
                                            </Typography>
                                        </ToggleButton>
                                    ))}
                                </ToggleButtonGroup>
                                <ToggleButtonGroup
                                    exclusive
                                    color='standard'
                                    value={selectedPeriod}
                                    onChange={handlePeriodSelection}>
                                    <ToggleButton
                                        sx={{
                                            textTransform : 'none',
                                        }}
                                        value='month'>
                                        <Typography
                                            variant='subtitle1'
                                            color={theme.palette.common.white}>
                                            {t('prospect_per_month')}
                                        </Typography>
                                    </ToggleButton>
                                    <ToggleButton
                                        sx={{
                                            textTransform : 'none',
                                        }}
                                        value='year'>
                                        <Typography
                                            variant='subtitle1'
                                            color={theme.palette.common.white}>
                                            {t('prospect_per_year')}
                                        </Typography>
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Stack>
                            {salaries}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    ) : (
        <Box
            sx={{
                backgroundColor : 'rgb(69,90,100)',
            }}
            paddingY={8}>
            <Stack
                direction='column'
                justifyContent='center'
                textAlign='center'>
                {category && (
                    <Typography
                        gutterBottom
                        color='secondary'
                        variant='subtitle1'
                        fontWeight='bold'>
                        {category}
                    </Typography>
                )}
                {title && (
                    <Typography
                        gutterBottom
                        margin={2}
                        color={theme.palette.common.white}
                        variant='h3'
                        fontWeight='bold'>
                        {title}
                    </Typography>
                )}
                {description && (
                    <Typography
                        gutterBottom
                        margin={2}
                        color='text.secondary'
                        variant='subtitle1'>
                        {description}
                    </Typography>
                )}
                <Box padding={2}>
                    <Select
                        sx={{
                            color : theme.palette.common.white,
                        }}
                        value={segmentations.find(segmentation => segmentation.location.name === selectedSegment)!.location.name}
                        onChange={handleSegmentChange}>
                        {segmentations.map(segmentation => (
                            <MenuItem
                                key={segmentation.location.name}
                                value={segmentation.location.name}>
                                {t(segmentation.location.name)}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
                <Box padding={2}>
                    <Select
                        sx={{
                            color : theme.palette.common.white,
                        }}
                        value={selectedPeriod}
                        onChange={handlePeriodChange}>
                        <MenuItem value='month'>
                            {t('prospect_per_month')}
                        </MenuItem>
                        <MenuItem value='year'>
                            {t('prospect_per_year')}
                        </MenuItem>
                    </Select>
                </Box>
                <Box
                    padding={2}
                    textAlign='left'>
                    {salaries}
                </Box>
            </Stack>
        </Box>
    );
};
