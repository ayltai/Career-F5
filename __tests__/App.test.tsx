import React from 'react';

import { render, } from '../src/utils/test';
import { App, } from '../src/App';

describe('App', () => {
    it('renders correctly', () => expect(render(<App />)).toMatchSnapshot());
});
