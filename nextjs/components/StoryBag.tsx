import Story from './Story'

type Props = {
  texts: string[]
}

export default function StoryBag({texts}: Props) {
  return (<>
    <div className="flex flex-col gap-y-[16px]">
      {texts.map(text => <Story text={text} />)}
    </div>
  </>)
}
