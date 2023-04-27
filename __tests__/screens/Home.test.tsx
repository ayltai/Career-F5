import React from 'react';

import { render, } from '../../src/utils/test';
import { Home, } from '../../src/screens';

describe('Home', () => {
    it('renders correctly', () => expect(render(
        <Home
            applyAction='applyAction'
            contactAction='contactAction' />
    )).toMatchSnapshot());
});
