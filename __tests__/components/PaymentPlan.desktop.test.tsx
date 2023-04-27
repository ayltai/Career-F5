import React from 'react';

import { createMatchMedia, render, } from '../../src/utils/test';
import { PaymentPlan, } from '../../src/components';

describe('PaymentPlan', () => {
    beforeAll(() => {
        window.matchMedia = createMatchMedia(900);
    });

    it('renders correctly for desktop', () => expect(render(
        <PaymentPlan
            title='title'
            description='description'
            cost='cost' />
    )).toMatchSnapshot());
});
