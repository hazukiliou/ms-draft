import BanItem from '@/components/team/BanItem'

interface BanListProps {
  side: 'blue' | 'red'
}
const fakeBanData = [
  { id: 'Ahri', side: 'blue' },
  { id: 'Garen', side: 'blue' },
  { id: null, side: 'blue' },
  { id: null, side: 'blue' },
  { id: null, side: 'blue' },
  // ...
]

export default function BanList({ side }: BanListProps) {
  return (
    <div className="grid grid-cols-5 gap-1">
      {
        // TODO: 待處理邏輯後移除假資料
        fakeBanData.map((champ, index) => (
          <BanItem key={`${side}-${index}-${champ.id ?? 'empty'}`} championId={champ.id} />
        ))
      }
    </div>
  )
}
