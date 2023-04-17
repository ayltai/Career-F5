import { ThemeProvider, } from '@mui/material';
import { configureStore, PreloadedState, Store, } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import { render, } from '@testing-library/react';
import mediaQuery from 'css-mediaquery';
import React, { ReactNode, } from 'react';
import { Provider, } from 'react-redux';

import { preferencesReducer, } from '../states';
import { AppTheme, } from '../styles';

export const createMatchMedia = (width : number) => (query : string) => ({
    matches             : mediaQuery.match(query, {
        width,
    }),
    media               : '',
    onchange            : null,
    addListener         : () => {},
    removeListener      : () => {},
    addEventListener    : () => {},
    removeEventListener : () => {},
    dispatchEvent       : () => false,
});

const createStore = (preloadedState? : Record<string, any>) => configureStore({
    reducer : {
        preferences : preferencesReducer,
    },
    preloadedState,
});

const defaultStore = createStore();

type RootState = ReturnType<typeof defaultStore.getState>;

const customRender = (ui : any, {
    preloadedState,
    store = createStore(preloadedState),
    ...rest
} : {
    preloadedState?  : PreloadedState<RootState>,
    store?           : Store<RootState>,
    [ rest : string] : any,
} = {}) => render(ui, {
    wrapper : ({
        children,
    } : {
        children : ReactNode,
    }) => (
        <Provider store={store}>
            <ThemeProvider theme={AppTheme('en')}>
                {children}
            </ThemeProvider>
        </Provider>
    ),
    ...rest,
});

export * from '@testing-library/react';

export { customRender as render, };
