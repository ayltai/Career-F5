import * as Sentry from '@sentry/react';
import mixpanel from 'mixpanel-browser';
import React, { StrictMode, } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, } from 'react-redux';
import { PersistGate, } from 'redux-persist/integration/react';
import '@fontsource/kreon/400.css';
import '@fontsource/kreon/700.css';
import '@fontsource/lobster-two/400.css';
import '@fontsource/noto-sans-tc/chinese-traditional-400.css';
import '@fontsource/noto-sans-tc/chinese-traditional-700.css';
import '@fontsource/noto-serif-tc/chinese-traditional-400.css';
import '@fontsource/noto-serif-tc/chinese-traditional-700.css';
import '@fontsource/sansita/400.css';
import '@fontsource/sansita/400-italic.css';
import '@fontsource/sansita/700.css';

import PackageInfo from '../package.json';

import { App, } from './App';
import { applyI18n, } from './i18n';
import en from './i18n/en.json';
import zh from './i18n/zh.json';
import { persistor, store, } from './states';
import { handleError, } from './utils';
import './index.css';

if (process.env.REACT_APP_MIXPANEL_TOKEN) mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {
    debug : process.env.NODE_ENV !== 'production',
});

if (process.env.REACT_APP_SENTRY_DSN) Sentry.init({
    dsn              : process.env.REACT_APP_SENTRY_DSN,
    environment      : process.env.NODE_ENV || 'development',
    release          : PackageInfo.version,
    tracesSampleRate : 1,
    integrations     : [
        new Sentry.BrowserTracing(),
    ],
});

applyI18n({
    language         : navigator.language.substring(0, 2),
    fallbackLanguage : 'en',
    resources        : {
        en : {
            translation : en,
        },
        zh : {
            translation : zh,
        },
    },
}).then(() => ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Sentry.ErrorBoundary showDialog>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </Sentry.ErrorBoundary>
    </StrictMode>
)).catch(handleError);
