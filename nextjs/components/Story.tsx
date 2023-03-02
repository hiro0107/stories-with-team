import React from "react"

type Props = {
  text: string
  color?: string
}

export default function Story({text, color = "bg-yellow-100"}: Props) {
  return (<>
    <div className={"p-[5px] w-[150px] h-[70px] text-[16px] drop-shadow-lg overflow-y-auto " + color}>
      {
        text.split('\n').map(line => <div>{line}</div>)
      }
    </div>
  </>)
}
