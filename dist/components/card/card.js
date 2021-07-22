import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
/**
 * ## Card 卡片
 * 通用卡片容器。
 *
 * ### 何时使用
 * 最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。
 *
 * ### 引用方法
 * ~~~js
 * import { Card } from 'metu'
 * ~~~
 *
 */
export var Card = function (props) {
    var title = props.title, className = props.className, canCollapsed = props.canCollapsed, collapse = props.collapse, iconTheme = props.iconTheme, iconSize = props.iconSize, width = props.width, children = props.children;
    var _a = useState(collapse), currentCollapse = _a[0], setCollapse = _a[1];
    var handleClick = function () {
        setCollapse(!currentCollapse);
    };
    var classes = classNames('metu-card', className);
    return (React.createElement("div", { className: classes, style: { width: width } },
        React.createElement("div", { className: "head" },
            React.createElement("h3", { className: "title" }, title),
            React.createElement("i", { className: "extra", onClick: handleClick }, canCollapsed ? (React.createElement(Icon, { type: currentCollapse ? 'minus' : 'plus', theme: iconTheme, size: iconSize })) : null)),
        React.createElement("div", { className: "body" }, currentCollapse ? children : null)));
};
Card.defaultProps = {
    canCollapsed: true,
    collapse: true,
    iconTheme: 'primary',
    iconSize: 16,
    width: '100%',
};
export default Card;
