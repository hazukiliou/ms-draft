import ChampionImage from '@/components/common/ChampionImage'
import ImagePlaceholder from '@/components/common/ImagePlaceholder'
import { useChampionData } from '@/hooks/useChampionData'
import type { Champion } from '@/types/champion'

interface PickItemProps {
  championId?: Champion['id'] | null
}

export default function PickItem({ championId = null }: PickItemProps) {
  const allChampions = useChampionData()
  const champion = championId ? allChampions.find((c) => c.id === championId) : null

  return (
    <div className="flex items-center gap-3 rounded bg-zinc-800 px-3 py-2 text-sm text-zinc-100 shadow-sm">
      <div className="h-12 w-12 shrink-0">
        {champion ? (
          <ChampionImage src={champion.imageUrl} alt={champion.name} />
        ) : (
          <ImagePlaceholder>No Pick</ImagePlaceholder>
        )}
      </div>
      <div className="flex-1 truncate text-left">{champion ? champion.name : 'No Pick'}</div>
    </div>
  )
}
