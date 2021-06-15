import React from 'react'
import { storiesOf } from '@storybook/react';
import Menu, { MenuItem, SubMenu } from './index';

const defaultMenu = () => (
  <Menu>
    <MenuItem>
      首页
    </MenuItem>
    <MenuItem disabled>
      作品
    </MenuItem>
    <SubMenu title="关于我们">
      <MenuItem>
        关于公司
      </MenuItem>
      <MenuItem>
        联系我们
      </MenuItem>
    </SubMenu>
  </Menu>
)

const verticalMenu = () => (
  <Menu
    mode="vertical"
    onSelect={(index) => {console.log(index)}}
    style={{ width: 200 }}
    defaultOpenSubmenus={['2', '3']}
  >
    <MenuItem>
      首页
    </MenuItem>
    <MenuItem disabled>
      作品
    </MenuItem>
    <SubMenu title="关于我们">
      <MenuItem>
        关于公司
      </MenuItem>
      <MenuItem>
        联系我们
      </MenuItem>
    </SubMenu>
    <SubMenu title="产品介绍">
      <MenuItem>
        产品目录
      </MenuItem>
      <MenuItem>
        产品分类
      </MenuItem>
    </SubMenu>
  </Menu>
)

storiesOf('Menu', module)
  .add('horizontal', defaultMenu)
  .add('vertical', verticalMenu)