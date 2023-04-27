import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useTheme, } from '@mui/material';
import mixpanel from 'mixpanel-browser';
import React, { Fragment, ReactNode, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import type { Course, Segmentation, } from '../@types';
import { BannerSection, ContactSection, CourseSection, InstructorSection, OverviewSection, PaymentSection, ProspectSection, StructureSection, } from '../sections';
import { contactDefinition, } from '../data';
import { handleError, } from '../utils';

export const Home = ({
    applyAction,
    contactAction,
} : {
    applyAction   : ReactNode,
    contactAction : ReactNode,
}) => {
    const [ contactOpen, setContactOpen, ] = useState(false);
    const [ errorOpen,   setErrorOpen,   ] = useState(false);

    const theme = useTheme();

    const { t, } = useTranslation();

    const steps : string[] = t('structure_weeks', {
        returnObjects : true,
    });

    const titles : string[] = t('structure_titles', {
        returnObjects : true,
    });

    const descriptions : string[] = t('structure_descriptions', {
        returnObjects : true,
    });

    const learnings : string[][] = t('structure_learnings', {
        returnObjects : true,
    });

    const courses : Course[] = t('course_details', {
        returnObjects : true,
    });

    const segmentations : Segmentation[] = t('segmentations', {
        returnObjects : true,
    });

    const handleContactClose = () => setContactOpen(false);

    const handleErrorClose = () => setErrorOpen(false);

    const handleSubmit = (data : Record<string, string>) => fetch('https://corsproxy.io/?https://docs.google.com/forms/u/0/d/e/1FAIpQLSdZNiL_ymbqXnbIeIF6HUt6BtPzHjRk6qMmrCgg1qo40eBqkg/formResponse', {
        method  : 'POST',
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded',
        },
        body    : new URLSearchParams(data).toString(),
    }).then(() => {
        setContactOpen(true);

        return true;
    }).catch(e => {
        handleError(e);

        setErrorOpen(true);

        return false;
    }).finally(() => {
        window.gtag('event', 'conversion', {
            send_to : process.env.REACT_APP_GTAG_CONVERSION,
        });

        if (process.env.REACT_APP_MIXPANEL_TOKEN) mixpanel.track('Contact');
    });

    return (
        <Fragment>
            <Box width='100%'>
                <BannerSection
                    title={t<string>('banner_title')}
                    description={t<string>('banner_description')}
                    callToAction={applyAction}
                    background='linear-gradient(315deg, rgba(0,150,136,0.2), rgba(178,223,219,0) 35%),linear-gradient(200deg, rgba(255,87,34,0.2), rgba(251,233,231,0) 45%),linear-gradient(145deg, rgba(255,224,130,0.3), rgba(255,224,130,0) 55%)'
                    foregroundImage='/images/home-banner.webp' />
                <OverviewSection
                    category={t<string>('category_overview')}
                    title={t<string>('overview_title')}
                    description={t<string>('overview_description')}
                    image='/images/home-explanation.webp' />
                <StructureSection
                    backgroundColor={theme.palette.grey[100]}
                    category={t<string>('category_structure')}
                    steps={steps}
                    titles={titles}
                    descriptions={descriptions}
                    learnings={learnings} />
                <a id='instructor' />
                <InstructorSection
                    category={t<string>('category_instructor')}
                    title={t<string>('instructor_header')} />
                <a id='courses' />
                <CourseSection
                    backgroundColor={theme.palette.grey[100]}
                    category={t<string>('category_courses')}
                    title={t<string>('courses_header')}
                    courses={courses} />
                <ProspectSection
                    category={t<string>('category_prospect')}
                    title={t<string>('prospect_title')}
                    segmentations={segmentations} />
                <PaymentSection
                    category={t<string>('category_payment')}
                    title={t<string>('payment_title')}
                    description={t<string>('payment_description')} />
                <a id='contact' />
                <ContactSection
                    background='linear-gradient(315deg, rgba(255,87,34,0.2), rgba(251,233,231,0) 35%),linear-gradient(200deg, rgba(255,224,130,0.3), rgba(255,224,130,0) 45%),linear-gradient(145deg, rgba(0,150,136,0.2), rgba(178,223,219,0) 55%)'
                    category={t<string>('category_contact')}
                    title={t<string>('contact_title')}
                    description={t<string>('contact_description')}
                    definition={contactDefinition}
                    contactAction={contactAction}
                    onSubmit={handleSubmit} />
            </Box>
            <Dialog
                open={contactOpen}
                onClose={handleContactClose}>
                <DialogTitle>
                    {t<string>('contact_sent_title')}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {t<string>('contact_sent_description')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleContactClose}>
                        {t<string>('action_close')}
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={errorOpen}
                onClose={handleErrorClose}>
                <DialogTitle>
                    {t<string>('error_title')}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {t<string>('error_contact_failed')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleErrorClose}>
                        {t<string>('action_close')}
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
};
