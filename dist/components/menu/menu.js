import React, { createContext, useState } from 'react';
import classNames from 'classnames';
export var MenuContext = createContext({ index: '0' });
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
export var Menu = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, mode = props.mode, style = props.style, onSelect = props.onSelect, children = props.children, defaultOpenSubmenus = props.defaultOpenSubmenus;
    var _a = useState(defaultIndex), currentActive = _a[0], setActive = _a[1];
    var handleClick = function (index) {
        // console.log(index)
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive || '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubmenus: defaultOpenSubmenus,
    };
    var classes = classNames('metu-menu', className, {
        'metu-menu-horizontal': mode === 'horizontal',
        'metu-menu-vertical': mode === 'vertical',
    });
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child; // 类型断言
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, { index: index.toString() });
            }
            else {
                console.error('Warning: Menu has a child which is not a MenuItem component.');
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubmenus: [],
};
export default Menu;
