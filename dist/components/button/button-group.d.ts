import React, { FC } from 'react';
export interface ButtonGtoupProps {
    className?: string;
    margin?: boolean;
    style?: React.CSSProperties;
    children: React.ReactNode;
}
export declare const ButtonGroup: FC<ButtonGtoupProps>;
export default ButtonGroup;
