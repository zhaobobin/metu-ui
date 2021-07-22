import { FC } from 'react';
import { MenuProps } from './menu';
import MenuItem, { MenuItemProps } from './menu-item';
import SubMenu, { SubMenuProps } from './sub-menu';
export declare type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export { MenuItem, SubMenu };
export default TransMenu;
