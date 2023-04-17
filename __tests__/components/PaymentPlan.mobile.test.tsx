import React from 'react';

import { createMatchMedia, render, } from '../../src/utils/test';
import { PaymentPlan, } from '../../src/components/PaymentPlan';

describe('PaymentPlan', () => {
    beforeAll(() => {
        window.matchMedia = createMatchMedia(360);
    });

    it('renders correctly for mobile', () => expect(render(
        <PaymentPlan
            title='title'
            description='description'
            cost='cost' />
    )).toMatchSnapshot());
});
