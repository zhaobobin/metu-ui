import React, { FC, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

export type ButtonSize = 'large' | 'middle' | 'small';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

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

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

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
export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    ghost,
    size,
    btnType,
    href,
    style,
    children,
    ...restProps
  } = props;

  const classes = classNames('metu-btn', className, {
    disabled: btnType === 'link' && disabled,
    'metu-btn-ghost': ghost,
    [`metu-btn-${size}`]: size,
    [`metu-btn-${btnType}`]: btnType,
  });

  if (btnType === 'link' && href) {
    return (
      <a className={classes} style={style} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={classes}
        style={style}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
  ghost: false,
};

export default Button;
