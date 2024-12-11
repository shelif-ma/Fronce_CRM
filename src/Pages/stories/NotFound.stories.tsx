import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import NotFound from '../NotFound';

export default {
  title: 'Pages/NotFound',
  component: NotFound,
} as Meta;

const Template: StoryFn = () => <NotFound />;

export const Default = Template.bind({});
Default.args = {};
