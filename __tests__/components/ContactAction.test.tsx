import React from 'react';

import { fireEvent, render, } from '../../src/utils/test';
import { ContactAction, } from '../../src/components/ContactAction';

describe('ContactAction', () => {
    it('renders correctly', () => {
        expect(render(<ContactAction />)).toMatchSnapshot();
    });

    it('responses to click', () => {
        process.env.REACT_APP_WHATSAPP_PHONE_NUMBER = '5511999999999';

        window.open = jest.fn();

        const { getByRole, } = render(<ContactAction />);

        fireEvent.click(getByRole('button'));

        expect(window.open).toBeCalledTimes(1);
        expect(window.open).toBeCalledWith(`https://wa.me/${process.env.REACT_APP_WHATSAPP_PHONE_NUMBER}`, '_blank', 'noopener,noreferrer');
    });
});
