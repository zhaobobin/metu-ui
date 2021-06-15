import React, { FC } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type themeType = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export type sizeType = 10 | 12 | 14 | 16 | 18 | 20;

export interface IconProps {
  className?: string;
  type: IconProp;
  theme?: themeType;
  size?: sizeType;
}

export const Icon: FC<IconProps> = (props) => {

  const {
    className,
    type,
    theme,
    size
  } = props;

  const classes = classNames('metu-icon', className, {
    [`icon-${theme}`]: theme,
    [`icon-${size}`]: size,
  });

  return (
    <FontAwesomeIcon className={classes} icon={type} />
  )
}

export default Icon;
