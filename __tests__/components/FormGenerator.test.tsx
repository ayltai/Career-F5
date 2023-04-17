import React from 'react';

import { contactDefinition, } from '../../src/data';
import { fireEvent, render, waitFor, } from '../../src/utils/test';
import { FormGenerator, } from '../../src/components/FormGenerator';

describe('FormGenerator', () => {
    it('renders correctly', () => {
        const handleSubmit = jest.fn(() => Promise.resolve(true));

        const { container, getByLabelText, getByRole, } = render(
            <FormGenerator
                title='title'
                description='description'
                definition={contactDefinition}
                onSubmit={handleSubmit} />
        );

        expect(container).toMatchSnapshot();

        expect(getByLabelText('form_name *')).toBeInTheDocument();
        expect(getByLabelText('form_email *')).toBeInTheDocument();
        expect(getByLabelText('form_message *')).toBeInTheDocument();
        expect(getByRole('button')).toBeInTheDocument();
        expect(getByRole('button')).toBeDisabled();
    });

    it('enables submit button when form is valid', async () => {
        const handleSubmit = jest.fn(() => Promise.resolve(true));

        const { getAllByRole, getByRole, } = render(
            <FormGenerator
                title='title'
                description='description'
                definition={contactDefinition}
                onSubmit={handleSubmit} />
        );

        fireEvent.change(getAllByRole('textbox')[0], {
            target : {
                value : 'name',
            },
        });

        fireEvent.change(getAllByRole('textbox')[1], {
            target : {
                value : 'email',
            },
        });

        fireEvent.change(getAllByRole('textbox')[2], {
            target : {
                value : 'message',
            },
        });

        await waitFor(() => expect(getByRole('button')).toBeDisabled());

        fireEvent.change(getAllByRole('textbox')[1], {
            target : {
                value : 'email@test.com',
            },
        });

        await waitFor(() => expect(getByRole('button')).toBeEnabled());
    });

    it('calls onSubmit when submit button is clicked', async () => {
        const handleSubmit = jest.fn(() => Promise.resolve(true));

        const { getAllByRole, getByRole, } = render(
            <FormGenerator
                title='title'
                description='description'
                definition={contactDefinition}
                onSubmit={handleSubmit} />
        );

        fireEvent.change(getAllByRole('textbox')[0], {
            target : {
                value : 'name',
            },
        });

        fireEvent.change(getAllByRole('textbox')[1], {
            target : {
                value : 'email@test.com',
            },
        });

        fireEvent.change(getAllByRole('textbox')[2], {
            target : {
                value : 'message',
            },
        });

        await waitFor(() => expect(getByRole('button')).toBeEnabled());

        fireEvent.click(getByRole('button'));

        await waitFor(() => {
            expect(getByRole('button')).toBeDisabled();
            expect(handleSubmit).toHaveBeenCalledTimes(1);
            expect(handleSubmit).toHaveBeenCalledWith({
                'entry.2143157713' : 'name',
                'entry.1731291251' : 'email@test.com',
                'entry.445180598'  : 'message',
            });
        });
    });
});
