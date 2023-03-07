import React from 'react'
import Story from './Story'

type Props = {
  texts: string[]
  color?: string
  onClick?: (index: number) => void
}

export default function StoryBag({ texts, onClick, color }: Props) {
  return (<>
    <div className="flex flex-col gap-y-[16px]">
      {texts.map((text, i) => <Story {...{text, onClick: () => { onClick && onClick(i) }, ...(color? {color} : {})}} />)}
    </div>
  </>)
}
