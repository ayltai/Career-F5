import React from 'react';

import { createMatchMedia, render, } from '../../src/utils/test';
import { OverviewSection, } from '../../src/sections';

describe('OverviewSection', () => {
    beforeAll(() => {
        window.matchMedia = createMatchMedia(900);
    });

    it('renders correctly for desktop', () => expect(render(
        <OverviewSection
            category='category'
            title='title'
            description='description'
            image='image' />
    )).toMatchSnapshot());
});
