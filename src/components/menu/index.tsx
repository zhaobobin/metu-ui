import { FC } from 'react';
import Menu, { MenuProps } from './menu';
import MenuItem, { MenuItemProps } from './menu-item';
import SubMenu, { SubMenuProps } from './sub-menu';

// 交叉类型
export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};
// 类型断言
const TransMenu = Menu as IMenuComponent;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export { MenuItem, SubMenu };
export default TransMenu;
