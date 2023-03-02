import React from 'react';

type Props = {
  position: 'left' | 'right'
  children: React.ReactNode
  addtionalStyles: string
}

export default function Sidebar({ position, children, addtionalStyles }: Props) {
  return (<>
    <div className={`fixed top-0 bottom-0 ${addtionalStyles} ${position === 'left' ? 'left-0' : 'right-0'}`}>
      {children}
    </div>
  </>)
}
