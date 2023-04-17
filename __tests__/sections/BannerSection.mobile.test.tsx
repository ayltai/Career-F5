import React from 'react';

import { createMatchMedia, render, } from '../../src/utils/test';
import { BannerSection, } from '../../src/sections/BannerSection';

describe('BannerSection', () => {
    beforeAll(() => {
        window.matchMedia = createMatchMedia(360);
    });

    it('renders correctly for desktop', () => expect(render(
        <BannerSection
            title='title'
            description='description'
            background='background'
            foregroundImage='foregroundImage'
            callToAction='callToAction' />
    )).toMatchSnapshot());
});
