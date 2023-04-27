import React from 'react';

import { fireEvent, render, waitFor, } from '../../src/utils/test';
import { LanguageSwitcher, } from '../../src/components/LanguageSwitcher';

const mockUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch : () => mockUseDispatch,
}));

describe('LanguageSwitcher', () => {
    beforeEach(() => mockUseDispatch.mockClear());

    it('renders correctly', () => expect(render(<LanguageSwitcher />)).toMatchSnapshot());

    it('opens the menu when the button is clicked', () => {
        const { getByRole, } = render(<LanguageSwitcher />);

        fireEvent.click(getByRole('button'));

        expect(getByRole('menu')).not.toBeNull();
    });

    it('changes the language to Chinese when the Chinese menu item is clicked', async () => {
        const { getByRole, } = render(<LanguageSwitcher />);

        fireEvent.click(getByRole('button'));

        fireEvent.click(getByRole('menuitem', {
            name : 'language_zh',
        }));

        await waitFor(() => {
            expect(mockUseDispatch).toHaveBeenCalledTimes(1);
            expect(mockUseDispatch).toHaveBeenCalledWith({
                type    : 'preferences/setLanguage',
                payload : 'zh',
            });
        });
    });
});
