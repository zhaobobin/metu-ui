import React, { FC, createContext, useState } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './menu-item';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode; // 菜单类型，现在支持水平、垂直和内嵌模式三种
  style?: React.CSSProperties; // 自定义样式
  onSelect?: SelectCallback;
  defaultOpenSubmenus?: string[];
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubmenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: '0' });

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
export const Menu: FC<MenuProps> = (props) => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    onSelect,
    children,
    defaultOpenSubmenus,
  } = props;

  const [currentActive, setActive] = useState(defaultIndex);

  const handleClick = (index: string) => {
    // console.log(index)
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContext: IMenuContext = {
    index: currentActive || '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubmenus,
  };

  const classes = classNames('metu-menu', className, {
    'metu-menu-horizontal': mode === 'horizontal',
    'metu-menu-vertical': mode === 'vertical',
  });

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>; // 类型断言
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index: index.toString() });
      } else {
        console.error(
          'Warning: Menu has a child which is not a MenuItem component.'
        );
      }
    });
  };

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubmenus: [],
};

export default Menu;
