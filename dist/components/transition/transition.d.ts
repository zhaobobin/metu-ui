import { FC } from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
declare type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';
interface TransitionProps extends CSSTransitionProps {
    animation?: AnimationName;
    classNames?: string;
    wrapper?: boolean;
}
export declare const Transition: FC<TransitionProps>;
export default Transition;
