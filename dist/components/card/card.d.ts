import { FC } from 'react';
import { themeType, sizeType } from '../icon/icon';
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
export declare const Card: FC<CardProps>;
export default Card;
