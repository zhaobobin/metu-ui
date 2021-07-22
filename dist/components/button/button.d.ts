import React, { FC, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
export declare type ButtonSize = 'large' | 'middle' | 'small';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link';
export interface BaseButtonProps {
    /** 自定义类名 */
    className?: string;
    /** 按钮失效状态 */
    disabled?: boolean;
    /** 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 */
    href?: string;
    /** 按钮尺寸 */
    size?: ButtonSize;
    /** 按钮类型 */
    btnType?: ButtonType;
    /** 使按钮背景透明 */
    ghost?: boolean;
    /** 自定义样式 */
    style?: React.CSSProperties;
    children: React.ReactNode;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
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
export declare const Button: FC<ButtonProps>;
export default Button;
