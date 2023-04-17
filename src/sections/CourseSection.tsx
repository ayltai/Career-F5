import { Box, Card, CardActions, CardContent, Chip, Container, Grid, Stack, Typography, } from '@mui/material';
import React from 'react';
import { useTranslation, } from 'react-i18next';

import type { Course, Section, } from '../@types';

export const CourseSection = ({
    backgroundColor,
    category,
    title,
    courses,
} : Section & {
    backgroundColor? : string,
    courses          : Course[],
}) => {
    const { t, } = useTranslation();

    return (
        <Box
            sx={{
                backgroundColor,
            }}
            paddingTop={8}
            paddingBottom={4}>
            <Container maxWidth='lg'>
                <Stack
                    direction='column'
                    textAlign='center'>
                    <Typography
                        gutterBottom
                        color='secondary'
                        variant='subtitle1'
                        fontWeight='bold'>
                        {category}
                    </Typography>
                    <Container maxWidth='md'>
                        <Typography
                            variant='h3'
                            fontWeight='bold'>
                            {title}
                        </Typography>
                    </Container>
                    <Box marginY={8}>
                        <Grid
                            container
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
                            {courses.map(course => (
                                <Grid
                                    key={course.route || course.text}
                                    sx={{
                                        display : 'flex',
                                    }}
                                    item
                                    xs={12}
                                    md={3}>
                                    <Card
                                        sx={{
                                            display       : 'flex',
                                            flexDirection : 'column',
                                            ':hover'      : {
                                                boxShadow : 8,
                                            },
                                        }}
                                        elevation={2}>
                                        <CardContent sx={{
                                            padding       : 2,
                                            display       : 'flex',
                                            flexDirection : 'column',
                                            flexGrow      : 1,
                                        }}>
                                            <Typography
                                                variant='subtitle1'
                                                color='text.secondary'>
                                                {t(course.category)}
                                            </Typography>
                                            <Typography variant='h5'>
                                                {course.text && t(course.text)}
                                            </Typography>
                                        </CardContent>
                                        {course.tags && (
                                            <CardActions sx={{
                                                padding : 2,
                                            }}>
                                                <Stack
                                                    useFlexGap
                                                    spacing={1}
                                                    direction='row'
                                                    flexWrap='wrap'
                                                    justifyContent='flex-start'>
                                                    {course.tags.map(tag => (
                                                        <Chip
                                                            key={tag}
                                                            size='small'
                                                            label={tag} />
                                                    ))}
                                                </Stack>
                                            </CardActions>
                                        )}
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};
