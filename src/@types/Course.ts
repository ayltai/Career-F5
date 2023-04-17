import { RouteItem, } from './RouteItem';

export type Course = RouteItem & {
    category : string,
    tags?    : string[],
};
