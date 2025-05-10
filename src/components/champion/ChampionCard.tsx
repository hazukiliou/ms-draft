import ChampionImage from '@/components/common/ChampionImage'
import type { Champion } from '@/types/champion'

interface ChampionCardProps {
  champion: Champion
}

export default function ChampionCard({ champion }: ChampionCardProps) {
  return (
    <div className="rounded-lg bg-zinc-800 p-3 text-center text-sm text-zinc-100">
      <ChampionImage src={champion.imageUrl} alt={champion.name} />
      {champion.name}
    </div>
  )
}
