import React, { ReactNode } from "react";
import './divider.scss'

type Props = {
  children: ReactNode
  type?: 'solid'|'dashed'|'dotted'
  alignment?: 'start'|'center'|'end'
  weight?: 'light'|'regular'|'heavy'
}
export const Divider = (props:Props) => {
  let {children,type='solid',alignment='center',weight='regular'} = props
  return (
    <div className="container">
      {alignment !== 'start' && <div className={`border__${type}--${weight}`} />}
      <span className="content">
        {children}
      </span>
      {alignment !== 'end' && <div className={`border__${type}--${weight}`} />}
    </div>
  );
};
