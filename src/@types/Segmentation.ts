import type { Location, } from './Location';
import type { Profession, } from './Profession';

export type Segmentation = {
    location    : Location,
    professions : Profession[],
};
