import React from 'react';

import { render, } from '../../src/utils/test';
import { CourseSection, } from '../../src/sections/CourseSection';

describe('CourseSection', () => {
    it('renders correctly', () => expect(render(
        <CourseSection
            backgroundColor='backgroundColor'
            category='category'
            title='title'
            courses={[
                {
                    category : 'category 1',
                    text     : 'text 1',
                    tags     : [
                        'tag 1',
                        'tag 2',
                    ],
                },
                {
                    category : 'category 2',
                    text     : 'text 2',
                    tags     : [
                        'tag 3',
                        'tag 4',
                    ],
                },
            ]} />
    )).toMatchSnapshot());
});
