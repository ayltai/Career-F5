import React from 'react';

import { fireEvent, render, } from '../../src/utils/test';
import { MenuButton, } from '../../src/components/MenuButton';

describe('MenuButton', () => {
    it('renders correctly', () => expect(render(<MenuButton text='dummy' />)).toMatchSnapshot());

    const { getByRole, } = render(
        <MenuButton
            text='dummy'
            route='#dummy' />
    );

    fireEvent.click(getByRole('button'));

    expect(window.location.href).toBe('http://localhost/#dummy');
});
