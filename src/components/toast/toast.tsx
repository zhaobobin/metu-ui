import React, { FC } from 'react';

interface ToastProps {
  text: string;
}

export const Toast: FC<ToastProps> = (props) => {
  const { text } = props;
  return (
    <div>{text}</div>
  );
};
Toast.defaultProps = {
  
};

export default Toast;
