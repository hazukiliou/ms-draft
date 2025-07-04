import PickItem from '@/components/team/PickItem'

interface PickListProps {
  side: 'blue' | 'red'
}
const fakePickData = [
  { id: 'Ahri', side: 'blue' },
  { id: 'Garen', side: 'blue' },
  { id: undefined, side: 'blue' },
  { id: undefined, side: 'blue' },
  { id: undefined, side: 'blue' },
  // ...
]

export default function PickList({ side }: PickListProps) {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-2">
      {
        // TODO: 待處理邏輯後移除假資料
        fakePickData.map((champ, index) => (
          <PickItem key={`${side}-${index}-${champ.id ?? 'empty'}`} championId={champ.id} />
        ))
      }
    </div>
  )
}
