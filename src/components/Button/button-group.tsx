import React, { FC } from 'react';
import classNames from 'classnames';

export interface ButtonGtoupProps {
  className?: string;
  margin?: boolean;
  style?: React.CSSProperties; // 自定义样式
  children: React.ReactNode;
}

export const ButtonGroup: FC<ButtonGtoupProps> = (props) => {
  const { className, margin, style, children } = props;

  const classes = classNames('metu-btn-group', className, {
    'has-margin': margin,
    'no-margin': !margin,
  });

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

ButtonGroup.defaultProps = {
  margin: true,
};

export default ButtonGroup;
