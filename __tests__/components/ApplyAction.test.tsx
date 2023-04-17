import React from 'react';

import { fireEvent, render, } from '../../src/utils/test';
import { ApplyAction, } from '../../src/components/ApplyAction';

describe('ApplyAction', () => {
    it('renders correctly', () => {
        const handleClick = jest.fn();

        expect(render(<ApplyAction onClick={handleClick} />)).toMatchSnapshot();
    });

    it('responses to click', () => {
        const handleClick = jest.fn();

        const { getByRole, } = render(<ApplyAction onClick={handleClick} />);

        fireEvent.click(getByRole('button'));

        expect(handleClick).toBeCalledTimes(1);
    });
});
