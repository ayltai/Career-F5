import type { Experience, } from '../@types';

export const experiences : Experience[] = [
    {
        key  : 'experience_jpmc',
        path : '/images/jpmc.webp',
    },
    {
        key  : 'experience_hsbc',
        path : '/images/hsbc.webp',
    },
    {
        key  : 'experience_mox',
        path : '/images/mox.webp',
    },
    {
        key  : 'experience_chc',
        path : '/images/chc.webp',
    },
    {
        key  : 'experience_nhs',
        path : '/images/nhs.webp',
    },
    {
        key  : 'experience_generali',
        path : '/images/generali.webp',
    },
];

export const contactDefinition = {
    properties : {
        'entry.2143157713' : {
            title     : 'form_name',
            type      : 'string',
            minLength : 3,
        },
        'entry.1731291251' : {
            title     : 'form_email',
            type      : 'string',
            minLength : 3,
            format    : 'email',
            pattern   : '^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$',
        },
        'entry.445180598'  : {
            title     : 'form_message',
            type      : 'string',
            minLength : 3,
            widget    : 'Text',
            view      : {
                rows : 5,
            },
        },
    },
    required   : [
        'entry.2143157713',
        'entry.1731291251',
        'entry.445180598',
    ],
};

export const applicationDefinition = {
    properties : {
        'entry.2143157713' : {
            title     : 'form_name',
            type      : 'string',
            minLength : 3,
        },
        'entry.1731291251' : {
            title     : 'form_email',
            type      : 'string',
            minLength : 3,
            format    : 'email',
            pattern   : '^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$',
        },
        'entry.875538261' : {
            title  : 'form_specialisation',
            type   : 'string',
            enum   : [
                'course_backend_java',
                'course_backend_node',
                'course_frontend_react',
                'course_frontend_android',
                'course_frontend_react_native',
                'course_cloud_aws',
                'course_cloud_azure',
                'course_cloud_gcp',
            ],
            widget : 'Select',
        },
        'entry.445180598' : {
            title     : 'form_message_optional',
            type      : 'string',
            widget    : 'Text',
            view      : {
                rows : 5,
            },
        },
    },
    required   : [
        'entry.2143157713',
        'entry.1731291251',
        'entry.875538261',
    ],
};
