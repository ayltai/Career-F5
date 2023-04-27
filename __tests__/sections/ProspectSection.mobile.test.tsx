import React from 'react';

import { segmentations, } from '../../src/i18n/en.json';
import { createMatchMedia, render, } from '../../src/utils/test';
import { ProspectSection, } from '../../src/sections';

describe('ProspectSection', () => {
    beforeAll(() => {
        window.matchMedia = createMatchMedia(360);
    });

    it('renders correctly for mobile', () => expect(render(
        <ProspectSection
            category='category'
            title='title'
            description='description'
            segmentations={segmentations} />
    )).toMatchSnapshot());
});
