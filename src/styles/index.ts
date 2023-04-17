import { createTheme, } from '@mui/material/styles';
import { orange, } from '@mui/material/colors';

const sansFontFamilyEn = [
    'Sansita',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
].join(',');

const sansFontFamilyTc = [
    '"Noto Sans TC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
].join(',');

const serifFontFamilyEn = [
    'Kreon',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
].join(',');

const serifFontFamilyTc = [
    '"Noto Serif TC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
].join(',');

export const AppTheme = (language? : string) => createTheme({
    palette    : {
        primary   : {
            main : orange[500],
        },
        secondary : {
            main : '#25d366',
        },
        mode      : 'light',
    },
    components : {
        MuiAccordion  : {
            styleOverrides : {
                root : {
                    borderRadius : '0.8rem',
                    padding      : 32,
                },
            },
        },
        MuiButton     : {
            styleOverrides : {
                root : {
                    paddingLeft   : 24,
                    paddingRight  : 24,
                    borderRadius  : '2rem',
                    textTransform : 'none',
                },
            },
        },
        MuiCard       : {
            styleOverrides : {
                root : {
                    borderRadius : '0.8rem',
                },
            },
        },
        MuiChip       : {
            styleOverrides : {
                root : {
                    fontFamily : language === 'zh' ? serifFontFamilyTc : serifFontFamilyEn,
                },
            },
        },
        MuiDialog     : {
            styleOverrides : {
                paper : {
                    borderRadius : '0.8rem',
                },
            },
        },
        MuiTypography : {
            styleOverrides : {
                button : {
                    fontFamily    : language === 'zh' ? sansFontFamilyTc : sansFontFamilyEn,
                    textTransform : 'none',
                },
            },
        },
    },
    typography : {
        h1        : {
            fontFamily : language === 'zh' ? sansFontFamilyTc : sansFontFamilyEn,
        },
        h2        : {
            fontFamily : language === 'zh' ? sansFontFamilyTc : sansFontFamilyEn,
        },
        h3        : {
            fontFamily : language === 'zh' ? sansFontFamilyTc : sansFontFamilyEn,
        },
        h4        : {
            fontFamily : language === 'zh' ? sansFontFamilyTc : sansFontFamilyEn,
        },
        h5        : {
            fontFamily : language === 'zh' ? sansFontFamilyTc : sansFontFamilyEn,
        },
        h6        : {
            fontFamily : language === 'zh' ? serifFontFamilyTc : serifFontFamilyEn,
            fontSize   : '1.4rem',
        },
        subtitle1 : {
            fontFamily : language === 'zh' ? sansFontFamilyTc : sansFontFamilyEn,
            fontSize   : '1.1rem',
        },
        subtitle2 : {
            fontFamily : language === 'zh' ? sansFontFamilyTc : sansFontFamilyEn,
        },
        body1     : {
            fontFamily : language === 'zh' ? serifFontFamilyTc : serifFontFamilyEn,
            fontSize   : '1.4rem',
        },
        body2     : {
            fontFamily : language === 'zh' ? serifFontFamilyTc : serifFontFamilyEn,
            fontSize   : '1.1rem',
        },
        button    : {
            fontFamily : language === 'zh' ? sansFontFamilyTc : sansFontFamilyEn,
            fontSize   : '1.2rem',
        },
        overline   : {
            fontFamily    : language === 'zh' ? serifFontFamilyTc : serifFontFamilyEn,
            fontSize      : '0.8rem',
            lineHeight    : '0.8rem',
            textTransform : 'none',
        },
    },
});
