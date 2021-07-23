import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome page', module).add(
  'welcome',
  () => {
    return (
      <div style={{ padding: '20px 40px' }}>
        <h1>欢迎来到 metu-ui 组件库</h1>
        <p>metu-ui 是为迷图网打造的一套UI组件库，不断完善</p>
        <h3>安装</h3>
        <p>
          <code>npm install metu-ui --save</code>
        </p>
        <p>or</p>
        <p>
          <code>yarn add metu-ui</code>
        </p>
      </div>
    );
  },
  { info: { disable: true } }
);
