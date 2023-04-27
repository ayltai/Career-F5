import React from 'react';

import { contactDefinition, } from '../../src/data';
import { createMatchMedia, render, } from '../../src/utils/test';
import { ContactSection, } from '../../src/sections';

describe('ContactSection', () => {
    beforeAll(() => {
        window.matchMedia = createMatchMedia(360);
    });

    it('renders correctly for desktop', () => {
        const handleSubmit = jest.fn(() => Promise.resolve(true));

        expect(render(
            <ContactSection
                background='background'
                category='category'
                title='title'
                description='description'
                definition={contactDefinition}
                contactAction='contactAction'
                onSubmit={handleSubmit} />
        )).toMatchSnapshot();
    });
});
