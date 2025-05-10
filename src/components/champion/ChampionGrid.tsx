import { useChampionData } from '@/hooks/useChampionData'

import ChampionCard from './ChampionCard'

export default function ChampionGrid() {
  const champions = useChampionData()
  return (
    // TODO: 待接入 CDN 圖片後調整 max-h
    <div className="grid max-h-[600px] grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-2 overflow-y-auto">
      {
        // TODO: 待接入 JSON 後移除假資料
        [...champions, ...champions, ...champions, ...champions].map((champ, i) => (
          <ChampionCard champion={champ} key={`${champ.id}_${i}`} />
        ))
      }
    </div>
  )
}
