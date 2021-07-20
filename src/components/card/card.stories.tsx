import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './index';

const defaultCard = () => (
  <Card title="title" width={300}>
    card content ...
  </Card>
);

storiesOf('Card', module).add('default', defaultCard);
