import { Box, Card, CardContent, Chip, Container, Divider, Stack, Step, StepButton, StepContent, Stepper, Typography, useMediaQuery, } from '@mui/material';
import React, { Fragment, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import type { Section, } from '../@types';

export const StructureSection = ({
    backgroundColor,
    category,
    steps,
    titles,
    descriptions,
    learnings,
} : Section & {
    backgroundColor? : string,
    steps            : string[],
    titles           : string[],
    descriptions     : string[],
    learnings?       : string[][],
}) => {
    const [ currentStep, setCurrentStep, ] = useState(0);

    const { t, } = useTranslation();

    const desktopMode = useMediaQuery('(min-width:900px)');

    const handleClick = (step : number) => () => setCurrentStep(step);

    const content = (
        <Fragment>
            <Typography
                gutterBottom
                variant={desktopMode ? 'h4' : 'h5'}>
                {titles[currentStep]}
            </Typography>
            <Typography
                gutterBottom
                variant='body2'>
                {descriptions[currentStep]}
            </Typography>
            {learnings && learnings[currentStep] && learnings[currentStep].length > 0 && (
                <Fragment>
                    <Divider sx={{
                        marginY : 2,
                    }} />
                    <Typography
                        gutterBottom
                        marginBottom={desktopMode ? undefined : 2}
                        color='text.secondary'
                        variant={desktopMode ? 'subtitle1' : 'subtitle2'}>
                        {t('structure_learning')}
                    </Typography>
                    <Stack
                        useFlexGap
                        spacing={1}
                        direction='row'
                        flexWrap='wrap'
                        justifyContent='flex-start'>
                        {learnings[currentStep].map(learning => (
                            <Chip
                                key={learning}
                                size='small'
                                label={learning} />
                        ))}
                    </Stack>
                </Fragment>
            )}
            <Box height={40} />
        </Fragment>
    );

    return (
        <Box
            sx={{
                backgroundColor,
            }}
            paddingY={8}>
            <Container maxWidth='lg'>
                <Box
                    display='flex'
                    alignItems='center'>
                    <Typography
                        marginX='auto'
                        marginBottom={4}
                        gutterBottom
                        color='secondary'
                        variant='subtitle1'
                        fontWeight='bold'>
                        {category}
                    </Typography>
                </Box>
                <Stepper
                    alternativeLabel={desktopMode}
                    nonLinear
                    activeStep={currentStep}
                    orientation={desktopMode ? 'horizontal' : 'vertical'}>
                    {steps.map((step, index) => (
                        <Step
                            key={step}
                            completed={currentStep > index}>
                            <StepButton
                                color='text.secondary'
                                onClick={handleClick(index)}>
                                {step}
                            </StepButton>
                            {!desktopMode && (
                                <StepContent>
                                    {content}
                                </StepContent>
                            )}
                        </Step>
                    ))}
                </Stepper>
                {desktopMode && (<Box marginTop={4}>
                    <Card>
                        <CardContent sx={{
                            padding : 8,
                        }}>
                            {content}
                        </CardContent>
                    </Card>
                </Box>)}
            </Container>
        </Box>
    );
};
