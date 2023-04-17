import React from 'react';

import { createMatchMedia, render, } from '../../src/utils/test';
import { InstructorSection, } from '../../src/sections/InstructorSection';

describe('InstructorSection', () => {
    beforeAll(() => {
        window.matchMedia = createMatchMedia(360);
    });

    it('renders correctly for desktop', () => expect(render(
        <InstructorSection
            category='category'
            title='title' />
    )).toMatchSnapshot());
});
