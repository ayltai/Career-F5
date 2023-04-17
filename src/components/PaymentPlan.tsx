import { ExpandMore as ExpandMoreIcon, } from '@mui/icons-material';
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography, useMediaQuery, } from '@mui/material';
import React from 'react';

export const PaymentPlan = ({
    title,
    description,
    cost,
} : {
    title       : string,
    description : string,
    cost        : string,
}) => {
    const desktopMode = useMediaQuery('(min-width:900px)');

    return (
        <Accordion
            disableGutters
            square
            sx={{
                ':hover'      : {
                    boxShadow : 8,
                },
            }}
            elevation={2}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                    width={desktopMode ? '50%' : '100%'}
                    flexShrink={desktopMode ? 0 : undefined}
                    variant="h5"
                    fontWeight='bold'>
                    {title}
                </Typography>
                {desktopMode && (
                    <Typography
                        color='secondary'
                        variant="h5"
                        fontWeight='bold'>
                        {cost}
                    </Typography>
                )}
            </AccordionSummary>
            <AccordionDetails>
                {!desktopMode && (
                    <Box paddingY={2}>
                        <Typography
                            color='secondary'
                            variant="h5"
                            fontWeight='bold'>
                            {cost}
                        </Typography>
                    </Box>
                )}
                <Typography>
                    {description}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};
