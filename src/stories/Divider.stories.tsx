import React from 'react';
import { ComponentMeta } from '@storybook/react';
import AlignStart from './assets/align-start.svg'
import AlignCenter from './assets/align-center.svg'
import AlignEnd from './assets/align-end.svg'

import { Divider } from './Divider';

export default {
  title: 'Example/Divider',
  component: Divider,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Divider>;


export const DividerStory = ()=> {
  return (
    <div>
      <Divider type='solid' >
        <text>Solid</text>
      </Divider>
      <Divider type='dashed' >
        <text>Dashed</text>
      </Divider>
      <Divider type='dotted' >
        <text>Dotted</text>
      </Divider>
      <Divider alignment='start' >
        <text>Start</text>
      </Divider>
      <Divider alignment='center' >
        <text>Center</text>
      </Divider>
      <Divider alignment='end' >
        <text>End</text>
      </Divider>
      <Divider weight='light' >
        <text>Light</text>
      </Divider>
      <Divider weight='regular'>
        <text>Regular</text>
      </Divider>
      <Divider weight='heavy'>
        <text>Heavy</text>
      </Divider>
      <Divider weight='light' alignment='start' >
        <img src={AlignStart} alt='align-start' width="32" height="32"></img>
      </Divider>
      <Divider >
        <img src={AlignCenter} alt='align-center' width="32" height="32"></img>
      </Divider>
      <Divider alignment='end' type='dashed' weight='heavy'>
        <img src={AlignEnd} alt='align-end' width="32" height="32"></img>
      </Divider>
    </div>
  )
}
