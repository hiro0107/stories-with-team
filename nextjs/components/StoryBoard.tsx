import React from 'react'
import Story from './Story'
import StoryBag from './StoryBag'

type UserStory = {
  text: string
}

type Activity = {
  text: string
}

type Board = {
  user_story: UserStory
  activities: Activity[]
}[]

type Props = {
  board: Board
}


export default function StoryBoard({ board }: Props) {
  return (<>
    <div className='inline-block'>
    <div className='flex gap-x-[24px]'>
      {
        board.map(item => <Story text={item.user_story.text} color='bg-blue-100'/>)
      }
    </div>
    <div className="border-[1px] my-[16px]"/>
    <div className='flex gap-x-[24px]'>
      {
        board.map(item => <StoryBag texts={item.activities.map(activity => activity.text)}/>)
      }
    </div>
    </div>
  </>)
}
