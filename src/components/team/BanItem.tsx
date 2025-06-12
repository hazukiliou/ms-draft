import ChampionImage from '@/components/common/ChampionImage'
import ImagePlaceholder from '@/components/common/ImagePlaceholder'
import { useChampionData } from '@/hooks/useChampionData'
import type { Champion } from '@/types/champion'

interface BanItemProps {
  championId?: Champion['id'] | null
}

export default function BanItem({ championId = null }: BanItemProps) {
  const allChampions = useChampionData()
  const champion = championId ? allChampions.find((c) => c.id === championId) : null

  return (
    <div className="aspect-square w-full rounded shadow-sm">
      {champion ? (
        <ChampionImage src={champion.imageUrl} alt={champion.name} />
      ) : (
        <ImagePlaceholder>No Ban</ImagePlaceholder>
      )}
    </div>
  )
}
