import Image from 'next/image'
import { useState } from 'react'

import ImagePlaceholder from '@/components/common/ImagePlaceholder'
import { useChampionData } from '@/hooks/useChampionData'
import { getChampionById } from '@/lib/getChampionById'
import type { Champion } from '@/types/champion'

interface ChampionImageProps {
  id?: Champion['id']
  alt?: string
}

export default function ChampionImage({ id, alt }: ChampionImageProps) {
  // TODO: 待接入 CDN 圖片後，將 valid 改為 true
  // 未來導入 onLoad/onError 判斷真實載入狀態
  const [valid, setValid] = useState(false)
  const allChampions = useChampionData()
  const champion = getChampionById(allChampions, id)
  // NOTE: imageUrl 理論上應該存在，若未來錯圖需加 log 記錄來源
  const src = champion?.imageUrl ?? ''

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded">
      {!id || !valid ? (
        <ImagePlaceholder>No Image</ImagePlaceholder>
      ) : (
        <Image
          fill
          src={src}
          alt={alt ?? id}
          className="object-cover"
          loading="lazy"
          placeholder="empty"
          onError={(e) => {
            setValid(false)
            e.currentTarget.onerror = null
          }}
        />
      )}
    </div>
  )
}
