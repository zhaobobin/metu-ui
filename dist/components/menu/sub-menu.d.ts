import React, { FC } from 'react';
export interface SubMenuProps {
    index?: string;
    title: string;
    showArrow?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export declare const SubMenu: FC<SubMenuProps>;
export default SubMenu;
