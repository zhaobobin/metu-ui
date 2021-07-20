import React from 'react';

import Button, { ButtonGroup } from './components/button';
import Menu, { MenuItem, SubMenu } from './components/menu';
import Card from './components/card';

const App = function () {
  return (
    <div className="metu-ui" style={{ width: '70%', margin: 'auto' }}>
      <p></p>
      <h2>Button</h2>
      <p></p>

      <Button
        onClick={() => {
          alert(123);
        }}
      >
        Default
      </Button>
      <Button size="large">Primary large</Button>
      <Button size="small">Primary small</Button>
      <Button btnType="primary">Primary</Button>
      <Button btnType="danger">Danger</Button>

      <p></p>

      <Button disabled>Default</Button>
      <Button btnType="primary" disabled>
        Primary disabled
      </Button>
      <Button btnType="danger" disabled>
        Danger disabled
      </Button>

      <p></p>

      <Button btnType="primary" ghost>
        Primary
      </Button>
      <Button btnType="danger" ghost>
        Danger
      </Button>

      <p></p>

      <Button btnType="primary" ghost disabled>
        Primary ghost disabled
      </Button>
      <Button btnType="danger" ghost disabled>
        Danger ghost disabled
      </Button>

      <p></p>

      <Button btnType="link" href="http://www.baidu.com" target="_blank">
        Link
      </Button>
      <Button btnType="link" disabled>
        Link disabled
      </Button>

      <p></p>
      <hr />
      <h2>Button Group</h2>
      <p></p>

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

      <p></p>
      <hr />
      <h2>Menu</h2>

      <Menu>
        <MenuItem>首页</MenuItem>
        <MenuItem disabled>作品</MenuItem>
        <SubMenu title="关于我们">
          <MenuItem>关于公司</MenuItem>
          <MenuItem>联系我们</MenuItem>
        </SubMenu>
      </Menu>

      <p style={{ padding: '10px 0' }}></p>

      <Menu
        mode="vertical"
        onSelect={(index) => {
          console.log(index);
        }}
        style={{ width: 200 }}
        defaultOpenSubmenus={['2', '3']}
      >
        <MenuItem>首页</MenuItem>
        <MenuItem disabled>作品</MenuItem>
        <SubMenu title="关于我们">
          <MenuItem>关于公司</MenuItem>
          <MenuItem>联系我们</MenuItem>
        </SubMenu>
        <SubMenu title="产品介绍">
          <MenuItem>产品目录</MenuItem>
          <MenuItem>产品分类</MenuItem>
        </SubMenu>
      </Menu>

      <p></p>
      <hr />
      <h2>Card</h2>

      <Card title="title">card content ...</Card>

      <p></p>
      <hr />
    </div>
  );
};

export default App;
