import { Language as LanguageIcon, } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem, useMediaQuery, } from '@mui/material';
import React, { MouseEvent, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useAppDispatch, useAppSelector, } from '../hooks';
import { setLanguage, } from '../states';
import { handleError, } from '../utils';

const LanguageMenuItem = ({
    selected,
    name,
    onLanguageChange,
} : {
    selected?         : boolean,
    name?             : string,
    onLanguageChange? : () => void,
}) => (
    <MenuItem
        selected={selected}
        onClick={onLanguageChange}>
        {name}
    </MenuItem>
);

export const LanguageSwitcher = () => {
    const [ anchorElement, setAnchorElement, ] = useState<null | HTMLElement>(null);

    const language    = useAppSelector(state => state.preferences.language);
    const dispatch    = useAppDispatch();
    const desktopMode = useMediaQuery('(min-width:900px)');

    const { t, i18n, } = useTranslation();

    const handleClick = (event : MouseEvent<HTMLButtonElement>) => setAnchorElement(event.currentTarget);

    const handleClose = () => setAnchorElement(null);

    const handleLanguageChangeEn = () => {
        dispatch(setLanguage('en'));

        i18n.changeLanguage('en').catch(handleError);

        setAnchorElement(null);
    };

    const handleLanguageChangeZh = () => {
        dispatch(setLanguage('zh'));

        i18n.changeLanguage('zh').catch(handleError);

        setAnchorElement(null);
    };

    return (
        <Box marginLeft={desktopMode ? 1 : 'auto'}>
            <IconButton
                size='large'
                edge='end'
                color='inherit'
                onClick={handleClick}>
                <LanguageIcon />
            </IconButton>
            <Menu
                anchorEl={anchorElement}
                open={Boolean(anchorElement)}
                onClose={handleClose}>
                <LanguageMenuItem
                    selected={language === 'en'}
                    name={t<string>('language_en')}
                    onLanguageChange={handleLanguageChangeEn} />
                <LanguageMenuItem
                    selected={language === 'zh'}
                    name={t<string>('language_zh')}
                    onLanguageChange={handleLanguageChangeZh} />
            </Menu>
        </Box>
    );
};
