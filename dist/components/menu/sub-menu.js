var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import Icon from '../icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Transition from '../transition';
library.add(fas);
export var SubMenu = function (props) {
    var index = props.index, title = props.title, showArrow = props.showArrow, className = props.className, style = props.style, children = props.children;
    var context = useContext(MenuContext);
    var openSubMenus = context.defaultOpenSubmenus;
    var isOpen = index && context.mode === 'vertical' ? openSubMenus.includes(index) : false;
    var _a = useState(isOpen), menuOpen = _a[0], setOpen = _a[1];
    var classes = classNames('metu-menu-submenu', className, {
        actived: context.index.split('-')[0] === index,
        'menu-open': menuOpen,
    });
    var handleCLick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    var clickEvents = context.mode === 'vertical' ? { onClick: handleCLick } : {};
    var hoverEvents = context.mode !== 'vertical'
        ? {
            onMouseEnter: function (e) {
                handleMouse(e, true);
            },
            onMouseLeave: function (e) {
                handleMouse(e, false);
            },
        }
        : {};
    var renderChildren = function () {
        var childrenElement = React.Children.map(children, function (child, i) {
            var childElement = child; // 类型断言
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, { index: index + "-" + i });
            }
            else {
                console.error('Warning: SubMenu has a child which is not a MenuItem component.');
            }
        });
        if (context.mode === 'vertical') {
            return React.createElement("ul", { className: "metu-submenu" }, childrenElement);
        }
        else {
            return (React.createElement(Transition, { in: menuOpen, timeout: 200, animation: "zoom-in-top" },
                React.createElement("ul", { className: "metu-submenu" }, childrenElement)));
        }
    };
    var renderArrowIcon = function () {
        if (!showArrow) {
            return null;
        }
        if (context.mode === 'vertical') {
            return (React.createElement(Icon, { className: "arrow-icon", type: "angle-down", theme: "secondary", size: 12 }));
        }
        else {
            return (React.createElement(Icon, { className: "arrow-icon", type: "angle-down", theme: menuOpen ? 'primary' : 'secondary', size: 12 }));
        }
    };
    return (React.createElement("li", __assign({ className: classes, style: style }, hoverEvents),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvents),
            title,
            renderArrowIcon()),
        renderChildren()));
};
SubMenu.displayName = 'SubMenu';
SubMenu.defaultProps = {
    showArrow: true,
};
export default SubMenu;
