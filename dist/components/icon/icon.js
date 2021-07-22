import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export var Icon = function (props) {
    var _a;
    var className = props.className, type = props.type, theme = props.theme, size = props.size;
    var classes = classNames('metu-icon', className, (_a = {},
        _a["icon-" + theme] = theme,
        _a["icon-" + size] = size,
        _a));
    return (React.createElement(FontAwesomeIcon, { className: classes, icon: type }));
};
export default Icon;
