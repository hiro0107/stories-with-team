import React, { useState } from "react";
import Sidebar from "./Sidebar";
import StoryBoard from "./StoryBoard";
import { MdClose } from "react-icons/md";
import { ClickProps } from './StoryBoard'

export default function App() {
  const board = [{
    user_story: { text: 'あああ'},
    activities: [
      { text: 'いいい'}, { text: 'ううう'}, { text: 'えええ'}, { text: 'おおお'}
    ]
  }, {
    user_story: { text: 'かかか'},
    activities: [
      { text: 'ききき'}, { text: 'くくく'}, { text: 'けけけ'}
    ]
  }]
  const [clickedItem, setClickedItem] = useState<ClickProps|null>(null)
  const onClick = (clickProps: ClickProps) => {
    setClickedItem(clickProps)
  }
  return (<>
    <div>
      <StoryBoard board={board} onClick={onClick}/>
      {
        clickedItem ?
          <Sidebar position="right" addtionalStyles="z-100 w-[250px] bg-blue-100 p-[10px]">
            <div className="flex flex-row-reverse">
              <MdClose onClick={() => setClickedItem(null)}/>
            </div>
            {
              clickedItem.type === 'user_story' ?
                <div>{ board[clickedItem.userStoryIndex].user_story.text }</div> :
                <div>{ board[clickedItem.userStoryIndex].activities[clickedItem.activityIndex].text}</div>
            }
          </Sidebar> :
          <></>
      }
    </div>
  </>)
}
