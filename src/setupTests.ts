import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

jest.mock('mixpanel-browser', () => ({
    init  : () => {},
    track : () => {},
}));

jest.mock('react-i18next', () => ({
    useTranslation : () => ({
        t    : (key : string, options? : {
            returnObjects? : boolean,
        }) => {
            if (key === 'structure_learnings') return [
                [
                    'line 1',
                    'line 2',
                ],
                [
                    'line 3',
                    'line 4',
                ],
            ];

            if (key === 'course_details') return [
                {
                    text     : 'text 1',
                    category : 'category 1',
                    tags     : [
                        'tag 1',
                        'tag 2',
                    ],
                },
                {
                    text     : 'text 2',
                    category : 'category 2',
                    tags     : [
                        'tag 3',
                        'tag 4',
                    ],
                },
            ];

            if (key === 'segmentations') return [
                {
                    location    : {
                        name     : 'location_hongkong',
                        locale   : 'en-US',
                        currency : 'HKD',
                    },
                    professions : [
                        {
                            name     : 'profession 1',
                            salaries : {
                                min : 25000,
                                avg : 50000,
                                max : 75000,
                            },
                        },
                        {
                            name     : 'profession 2',
                            salaries : {
                                min : 30000,
                                avg : 60000,
                                max : 90000,
                            },
                        },
                    ],
                },
                {
                    location    : {
                        name     : 'location_london',
                        locale   : 'en-GB',
                        currency : 'GBP',
                    },
                    professions : [
                        {
                            name     : 'profession 3',
                            salaries : {
                                min : 2500,
                                avg : 5000,
                                max : 7500,
                            },
                        },
                        {
                            name     : 'profession 4',
                            salaries : {
                                min : 3000,
                                avg : 6000,
                                max : 9000,
                            },
                        },
                    ],
                },
            ];

            if (options && options.returnObjects) return [
                'line 1',
                'line 2',
            ];

            return `${key}${options ? JSON.stringify(options) : ''}`;
        },
        i18n : {
            changeLanguage : () => new Promise(() => {}),
        },
    }),
}));

jest.mock('@sentry/react', () => ({
    init             : () => {},
    captureException : () => {},
}));
