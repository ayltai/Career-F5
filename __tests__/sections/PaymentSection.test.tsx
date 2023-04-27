import React from 'react';

import { render, } from '../../src/utils/test';
import { PaymentSection, } from '../../src/sections';

describe('PaymentSection', () => {
    it('renders correctly', () => expect(render(
        <PaymentSection
            category='category'
            title='title'
            description='description' />
    )).toMatchSnapshot());
});
