import React from "react"

type Props = {
  text: string
  color?: string
  highlight: boolean
  onClick?: () => void
}

export default function Story({text, onClick, highlight, color = "bg-yellow-100"}: Props) {
  const className = "p-[5px] w-[150px] h-[70px] text-[16px] drop-shadow-lg overflow-y-auto " + color +
    (highlight === true ? ' border-[1px] border-blue-600' : '')
  return (<>
    <div className={className} onClick={onClick}>
      {
        text.split('\n').map(line => <div>{line}</div>)
      }
    </div>
  </>)
}
