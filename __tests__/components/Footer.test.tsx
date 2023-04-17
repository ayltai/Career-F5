import React from 'react';

import { render, } from '../../src/utils/test';
import { Footer, } from '../../src/components/Footer';

describe('Footer', () => {
    it('renders correctly', () => {
        expect(render(<Footer />)).toMatchSnapshot();
    });
});
