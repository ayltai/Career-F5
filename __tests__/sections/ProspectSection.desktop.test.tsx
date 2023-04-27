import React from 'react';

import { segmentations, } from '../../src/i18n/en.json';
import { createMatchMedia, fireEvent, render, waitFor, } from '../../src/utils/test';
import { ProspectSection, } from '../../src/sections';

describe('ProspectSection', () => {
    beforeAll(() => {
        window.matchMedia = createMatchMedia(900);
    });

    it('renders correctly for desktop', () => expect(render(
        <ProspectSection
            category='category'
            title='title'
            description='description'
            segmentations={segmentations} />
    )).toMatchSnapshot());

    it('renders the correct salaries for the selected segmentation', async () => {
        const { getAllByRole, getByText, queryByText, } = render(
            <ProspectSection
                category='category'
                title='title'
                description='description'
                segmentations={segmentations} />
        );

        expect(getByText('Backend Software Engineer')).not.toBeNull();
        expect(getByText('HK$51,000')).not.toBeNull();
        expect(queryByText('£5,300')).toBeNull();

        fireEvent.click(getAllByRole('button')[1]);

        await waitFor(() => {
            expect(getByText('Backend Software Engineer')).not.toBeNull();
            expect(getByText('£5,300')).not.toBeNull();
            expect(queryByText('HK$51,000')).toBeNull();
        });
    });
});
