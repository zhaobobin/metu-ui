import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
export var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children;
    var context = useContext(MenuContext);
    var handleClick = function () {
        if (context.onSelect && !disabled && typeof index === 'string') {
            context.onSelect(index);
        }
    };
    var classes = classNames('metu-menu-item', className, {
        actived: context.index === index,
        disabled: disabled,
    });
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
MenuItem.defaultProps = {
    index: '0',
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
