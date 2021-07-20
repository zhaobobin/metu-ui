import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties; // 自定义样式
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;

  const context = useContext(MenuContext);

  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };

  const classes = classNames('metu-menu-item', className, {
    actived: context.index === index,
    disabled: disabled,
  });

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.defaultProps = {
  index: '0',
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
