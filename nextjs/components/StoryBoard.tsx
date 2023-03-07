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

export type ClickProps = {
  type: 'user_story',
  userStoryIndex: number
} | {
  type: 'activity',
  userStoryIndex: number
  activityIndex: number
}

type Props = {
  board: Board
  onClick?: (clickProps: ClickProps) => void
}


export default function StoryBoard({ board, onClick }: Props) {
  return (<>
    <div className='inline-block'>
    <div className='flex gap-x-[24px]'>
      {
        board.map((item, userStoryIndex) =>
          <Story
            text={item.user_story.text} color='bg-blue-100'
            onClick={() => onClick && onClick({ type: 'user_story', userStoryIndex })}
          />
        )
      }
    </div>
    <div className="border-[1px] my-[16px]"/>
    <div className='flex gap-x-[24px]'>
      {
        board.map((item, userStoryIndex) =>
          <StoryBag
            texts={item.activities.map(activity => activity.text)}
            onClick={(activityIndex) => onClick && onClick({ type: 'activity', userStoryIndex, activityIndex })}/>)
      }
    </div>
    </div>
  </>)
}
