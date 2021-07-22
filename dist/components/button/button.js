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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from 'classnames';
/**
 * ## Button 按钮
 * 按钮用于开始一个即时操作。
 *
 * ### 何时使用
 * 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
 *
 * ### 引用方法
 * ~~~js
 * import { Button } from 'metu'
 * ~~~
 *
 */
export var Button = function (props) {
    var _a;
    var className = props.className, disabled = props.disabled, ghost = props.ghost, size = props.size, btnType = props.btnType, href = props.href, style = props.style, children = props.children, restProps = __rest(props, ["className", "disabled", "ghost", "size", "btnType", "href", "style", "children"]);
    var classes = classNames('metu-btn', className, (_a = {
            disabled: btnType === 'link' && disabled,
            'metu-btn-ghost': ghost
        },
        _a["metu-btn-" + size] = size,
        _a["metu-btn-" + btnType] = btnType,
        _a));
    if (btnType === 'link' && href) {
        return (React.createElement("a", __assign({ className: classes, style: style, href: href }, restProps), children));
    }
    else {
        return (React.createElement("button", __assign({ className: classes, style: style, disabled: disabled }, restProps), children));
    }
};
Button.defaultProps = {
    disabled: false,
    btnType: 'default',
    ghost: false,
};
export default Button;
