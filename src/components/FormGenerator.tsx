import { Button, Card, CardActions, CardContent, Typography, useMediaQuery, } from '@mui/material';
import { GridContainer, widgets, } from '@ui-schema/ds-material';
import { createEmptyStore, createOrderedMap, injectPluginStack, isInvalid, relT, StoreSchemaType, storeUpdater, TranslatorContext, UIMetaProvider, UIStoreProvider, } from '@ui-schema/ui-schema';
import React, { useCallback, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import { handleError, } from '../utils';

const GridStack = injectPluginStack(GridContainer);

export type FormGeneratorProps = {
    title?       : string,
    description? : string,
    definition   : object,
    onSubmit     : (data : Record<string, string>) => Promise<boolean>,
};

export const FormGenerator = ({
    elevated = true,
    title,
    description,
    definition,
    onSubmit,
} : FormGeneratorProps & {
    elevated? : boolean,
}) => {
    const storeSchema = createOrderedMap({
        type : 'object',
        ...definition,
    });

    const [ store,        setStore,        ] = useState(() => createEmptyStore(storeSchema.get('type')));
    const [ showValidity, setShowValidity, ] = useState(false);
    const [ isSubmitting, setIsSubmitting, ] = useState(false);

    const desktopMode = useMediaQuery('(min-width:900px)');

    const { t, } = useTranslation();

    const handleChange = useCallback((actions : any) => setStore(storeUpdater(actions)), [ setStore,]);

    const handleSubmit = () => {
        setShowValidity(true);

        if (!isInvalid(store.getValidity())) {
            setIsSubmitting(true);

            onSubmit(store.valuesToJS() as Record<string, string>).then(success => {
                if (success) {
                    setStore(createEmptyStore(storeSchema.get('type')));

                    setShowValidity(false);
                }
            }).then(() => setIsSubmitting(false)).catch(handleError);
        }
    };

    const translate = (text : string, context? : TranslatorContext, schema? : StoreSchemaType) => {
        const schemaT = relT(schema, context);

        return schemaT ? schemaT : t(text);
    };

    return (
        <Card
            sx={{
                borderRadius : 4,
                padding      : desktopMode ? 4 : 1,
            }}
            elevation={elevated ? 4 : 0}>
            <CardContent>
                {title && (
                    <Typography
                        gutterBottom
                        variant='h5'
                        fontWeight='bold'>
                        {t(title)}
                    </Typography>
                )}
                {description && (
                    <Typography
                        gutterBottom
                        variant='body1'>
                        {t(description)}
                    </Typography>
                )}
                <UIMetaProvider
                    t={translate}
                    widgets={widgets}>
                    <UIStoreProvider
                        showValidity={showValidity}
                        store={store}
                        onChange={handleChange}>
                        <GridStack
                            isRoot
                            schema={storeSchema} />
                    </UIStoreProvider>
                </UIMetaProvider>
            </CardContent>
            <CardActions>
                <Button
                    sx={{
                        marginX : 1,
                    }}
                    disabled={isSubmitting || !!isInvalid(store.getValidity())}
                    variant='contained'
                    onClick={handleSubmit}>
                    <Typography
                        color='white'
                        variant='button'>
                        {t(isSubmitting ? 'action_submitting' : 'action_submit')}
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    );
};
