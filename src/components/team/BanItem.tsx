import ChampionImage from '@/components/common/ChampionImage'
import ImagePlaceholder from '@/components/common/ImagePlaceholder'
import type { Champion } from '@/types/champion'

interface BanItemProps {
  championId?: Champion['id']
}

export default function BanItem({ championId }: BanItemProps) {
  return (
    <div className="aspect-square w-full rounded shadow-sm">
      {championId ? <ChampionImage id={championId} /> : <ImagePlaceholder>No Ban</ImagePlaceholder>}
    </div>
  )
}
