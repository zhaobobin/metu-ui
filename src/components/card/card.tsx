import React, { FC, useState } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { themeType, sizeType } from '../icon/icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export interface CardProps {
  title?: string | JSX.Element;
  className?: string;
  canCollapsed?: boolean;
  collapse?: boolean;
  iconTheme?: themeType;
  iconSize?: sizeType;
  width?: number | string;
}

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
export const Card: FC<CardProps> = (props) => {
  const {
    title,
    className,
    canCollapsed,
    collapse,
    iconTheme,
    iconSize,
    width,
    children,
  } = props;

  const [currentCollapse, setCollapse] = useState(collapse);

  const handleClick = () => {
    setCollapse(!currentCollapse);
  };

  const classes = classNames('metu-card', className);

  return (
    <div className={classes} style={{ width }}>
      <div className="head">
        <h3 className="title">{title}</h3>
        <i className="extra" onClick={handleClick}>
          {canCollapsed ? (
            <Icon
              type={currentCollapse ? 'minus' : 'plus'}
              theme={iconTheme}
              size={iconSize}
            />
          ) : null}
        </i>
      </div>
      <div className="body">{currentCollapse ? children : null}</div>
    </div>
  );
};

Card.defaultProps = {
  canCollapsed: true,
  collapse: true,
  iconTheme: 'primary',
  iconSize: 16,
  width: '100%',
};

export default Card;
