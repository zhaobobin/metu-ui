import { FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export declare type themeType = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export declare type sizeType = 10 | 12 | 14 | 16 | 18 | 20;
export interface IconProps {
    className?: string;
    type: IconProp;
    theme?: themeType;
    size?: sizeType;
}
export declare const Icon: FC<IconProps>;
export default Icon;
