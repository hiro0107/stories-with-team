import React from 'react'
import Story from './Story'

type Props = {
  texts: string[]
  color?: string
}

export default function StoryBag({ texts, color }: Props) {
  return (<>
    <div className="flex flex-col gap-y-[16px]">
      {texts.map(text => <Story {...{text, ...(color? {color} : {})}} />)}
    </div>
  </>)
}
