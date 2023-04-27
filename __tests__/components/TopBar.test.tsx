import React from 'react';

import { render, } from '../../src/utils/test';
import { TopBar, } from '../../src/components';

describe('TopBar', () => {
    it('renders correctly', () => expect(render(
        <TopBar
            branding='branding'
            menu={[
                {
                    text  : 'menu 1',
                    route : '#route1',
                },
                {
                    text  : 'menu 2',
                    route : '#route2',
                },
            ]}
            callToAction='callToAction' />
    )).toMatchSnapshot());
});
