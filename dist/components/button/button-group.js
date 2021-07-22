import React from 'react';
import classNames from 'classnames';
export var ButtonGroup = function (props) {
    var className = props.className, margin = props.margin, style = props.style, children = props.children;
    var classes = classNames('metu-btn-group', className, {
        'has-margin': margin,
        'no-margin': !margin,
    });
    return (React.createElement("div", { className: classes, style: style }, children));
};
ButtonGroup.defaultProps = {
    margin: true,
};
export default ButtonGroup;
