type Props = {
  text: string
}

export default function Story({text}: Props) {
  return (<>
    <div className={"bg-yellow-100 p-[5px] w-[150px] h-[70px] text-[16px] drop-shadow-lg overflow-y-auto"}>
      {
        text.split('\n').map(line => <div>{line}</div>)
      }
    </div>
  </>)
}
