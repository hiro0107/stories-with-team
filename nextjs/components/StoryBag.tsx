import React from 'react'
import Story from './Story'

type Props = {
  texts: string[]
  highlightIndex: number|undefined
  color?: string
  onClick?: (index: number) => void
}

export default function StoryBag({ texts, highlightIndex, onClick, color }: Props) {
  return (<>
    <div className="flex flex-col gap-y-[16px]">
      {texts.map((text, i) => <Story {...{text, highlight: i === highlightIndex, onClick: () => { onClick && onClick(i) }, ...(color? {color} : {})}} />)}
    </div>
  </>)
}
