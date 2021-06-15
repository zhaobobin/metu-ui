import React from 'react'
import { storiesOf } from '@storybook/react';
import Button, { ButtonGroup } from './index';

const defaultButton = () => (
  <Button onClick={() => {alert(123)}}>Default</Button>
)

const buttonWithSize = () => (
  <>
    <Button size="small">small large</Button>
    <Button size="middle">middle large</Button>
    <Button size="large">large large</Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button>Default</Button>
    <Button btnType="primary">Primary</Button>
    <Button btnType="danger">Danger</Button>
    <Button btnType="link" href="https://www.baidu.com">Danger</Button>
    <p></p>
    <Button disabled>Default</Button>
    <Button btnType="primary" disabled>Primary</Button>
    <Button btnType="danger" disabled>Danger</Button>
    <Button btnType="link" href="https://www.baidu.com" disabled>Danger</Button>
  </>
)

const buttonWithGroup = () => (
  <>
    <ButtonGroup>
      <Button btnType="primary">确 定</Button>
      <Button>取 消</Button>
    </ButtonGroup>
    <p></p>
    <ButtonGroup margin={false}>
      <Button btnType="primary">Primary</Button>
      <Button>Default</Button>
      <Button btnType="danger">Danger</Button>
    </ButtonGroup>
  </>
)

storiesOf('Button', module)
  .add('default', defaultButton)
  .add('button size', buttonWithSize)
  .add('button type', buttonWithType)
  .add('button group', buttonWithGroup)