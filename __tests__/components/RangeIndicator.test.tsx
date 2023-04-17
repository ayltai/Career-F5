import React from 'react';

import { render, } from '../../src/utils/test';
import { RangeIndicator, } from '../../src/components/RangeIndicator';

describe('RangeIndicator', () => {
    it('renders correctly', () => expect(render(
        <RangeIndicator
            color='primary'
            name='Test'
            min={0}
            max={100}
            salaries={{
                min : 25,
                max : 75,
                avg : 50,
            }} />
    )).toMatchSnapshot());
});
