import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import type { Meta, StoryFn } from '@storybook/react';

import Layout from '../Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
  decorators: [
    (Story: StoryFn) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template = () => <Layout />;

export const Default = Template.bind({});
