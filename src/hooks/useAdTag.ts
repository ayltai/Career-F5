import { useEffect, useState, } from 'react';
import { useScript, } from 'usehooks-ts';

export const useAdTag = (id? : string) => {
    const [ gtag, setGtag, ] = useState<Gtag.Gtag | null>(null);

    const status = useScript(id ? `https://www.googletagmanager.com/gtag/js?id=${id}` : null, {
        removeOnUnmount : false,
    });

    useEffect(() => {
        if (status === 'ready') {
            if (window.gtag) {
                setGtag(window.gtag);
            } else {
                window.dataLayer = window.dataLayer || [];

                const gTag : Gtag.Gtag = (...args : any[]) => window.dataLayer.push(args);

                gTag('js', new Date());
                if (id) gTag('config', id);

                setGtag(gTag);

                window.gtag = gTag;
            }
        }
    }, [ status, ]);

    return gtag;
};
