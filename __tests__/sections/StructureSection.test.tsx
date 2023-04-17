import React from 'react';

import { fireEvent, render, waitFor, } from '../../src/utils/test';
import { StructureSection, } from '../../src/sections/StructureSection';

describe('StructureSection', () => {
    it('renders correctly', () => expect(render(
        <StructureSection
            backgroundColor='backgroundColor'
            category='category'
            steps={[
                'step_1',
                'step_2',
            ]}
            titles={[
                'title_1',
                'title_2',
            ]}
            descriptions={[
                'description_1',
                'description_2',
            ]}
            learnings={[
                [
                    'tag_1',
                    'tag_2',
                ],
                [
                    'tag_3',
                    'tag_4',
                ],
            ]} />
    )).toMatchSnapshot());

    it('renders correctly with steps', async () => {
        const { getAllByRole, getByText, queryByText, } = render(
            <StructureSection
                backgroundColor='backgroundColor'
                category='category'
                steps={[
                    'step_1',
                    'step_2',
                ]}
                titles={[
                    'title_1',
                    'title_2',
                ]}
                descriptions={[
                    'description_1',
                    'description_2',
                ]}
                learnings={[
                    [
                        'tag_1',
                        'tag_2',
                    ],
                    [
                        'tag_3',
                        'tag_4',
                    ],
                ]} />
        );

        expect(getByText('title_1')).toBeInTheDocument();
        expect(queryByText('title_2')).not.toBeInTheDocument();

        fireEvent.click(getAllByRole('button')[1]);

        await waitFor(() => {
            expect(getByText('title_2')).toBeInTheDocument();
            expect(queryByText('title_1')).not.toBeInTheDocument();
        });
    });
});
