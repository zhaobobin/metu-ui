import React, { FC } from 'react';
declare type MenuMode = 'horizontal' | 'vertical';
declare type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    defaultOpenSubmenus?: string[];
}
interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubmenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
/**
 * ## Menu 导航菜单
 * 为页面和功能提供导航的菜单列表。
 *
 * ### 何时使用
 * 导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。
 *
 * ### 引用方法
 * ~~~js
 * import { Menu } from 'metu'
 * ~~~
 *
 */
export declare const Menu: FC<MenuProps>;
export default Menu;
