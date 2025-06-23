import ChampionImage from '@/components/common/ChampionImage'
import ImagePlaceholder from '@/components/common/ImagePlaceholder'
import { useChampionData } from '@/hooks/useChampionData'
import { getChampionById } from '@/lib/getChampionById'
import type { Champion } from '@/types/champion'

interface PickItemProps {
  championId?: Champion['id']
}

export default function PickItem({ championId }: PickItemProps) {
  const allChampions = useChampionData()
  const champion = getChampionById(allChampions, championId)

  return (
    <div className="flex items-center gap-3 overflow-hidden rounded bg-zinc-800 px-3 py-2 text-sm text-zinc-100 shadow-sm">
      <div className="h-12 w-12 shrink-0">
        {champion ? (
          <ChampionImage id={champion.id} alt={champion.name} />
        ) : (
          <ImagePlaceholder>No Pick</ImagePlaceholder>
        )}
      </div>
      <div className="flex-1 truncate text-left">{champion ? champion.name : 'No Pick'}</div>
    </div>
  )
}
