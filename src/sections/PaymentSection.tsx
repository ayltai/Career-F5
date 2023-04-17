import { Box, Container, Stack, Typography, } from '@mui/material';
import React from 'react';
import { useTranslation, } from 'react-i18next';

import type { Section, } from '../@types';
import { PaymentPlan, } from '../components';

export const PaymentSection = ({
    category,
    title,
    description,
} : Section) => {
    const { t, } = useTranslation();

    const plans = [
        {
            title       : t<string>('payment_full_title'),
            description : t<string>('payment_full_description'),
            cost        : t<string>('payment_full_cost'),
        },
        {
            title       : t<string>('payment_instalment_title'),
            description : t<string>('payment_instalment_description'),
            cost        : t<string>('payment_instalment_cost'),
        },
        {
            title       : t<string>('payment_discount_title'),
            description : t<string>('payment_discount_description'),
            cost        : t<string>('payment_discount_cost'),
        },
        {
            title       : t<string>('payment_interview_title'),
            description : t<string>('payment_interview_description'),
            cost        : t<string>('payment_interview_cost'),
        },
    ];

    return (
        <Box paddingY={8}>
            <Container maxWidth='lg'>
                <Stack
                    spacing={2}
                    direction='column'>
                    <Typography
                        gutterBottom
                        color='secondary'
                        variant='subtitle1'
                        fontWeight='bold'>
                        {category}
                    </Typography>
                    <Box marginBottom={2}>
                        <Typography
                            gutterBottom
                            variant='h3'
                            fontWeight='bold'>
                            {title}
                        </Typography>
                    </Box>
                    <Typography
                        gutterBottom
                        variant='body1'>
                        {description}
                    </Typography>
                    {plans.map(plan => (
                        <Box
                            key={plan.title}
                            paddingTop={4}>
                            <PaymentPlan {...plan} />
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};
