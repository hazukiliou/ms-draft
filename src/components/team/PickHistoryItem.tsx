import ChampionImage from '@/components/common/ChampionImage'
import type { Champion } from '@/types/champion'

interface PickHistoryItemProps {
  game: number
  bluePick: Champion['id'][]
  redPick: Champion['id'][]
}

export default function PickHistoryItem({ game, bluePick, redPick }: PickHistoryItemProps) {
  return (
    <div className="mx-auto mb-1 rounded bg-white/10 px-2 py-3 text-sm shadow-sm">
      <div className="mb-1 font-medium text-zinc-300">{`Game ${game}`}</div>
      <div className="flex justify-between gap-2">
        <div className="grid grid-cols-5 gap-1">
          {bluePick.map((id) => (
            <ChampionImage key={id} id={id} />
          ))}
        </div>
        <div className="grid grid-cols-5 gap-1">
          {redPick.map((id) => (
            <ChampionImage key={id} id={id} />
          ))}
        </div>
      </div>
    </div>
  )
}
