import Image from 'next/image'
import { useState } from 'react'

import ImagePlaceholder from '@/components/common/ImagePlaceholder'

interface ChampionImageProps {
  src?: string
  alt: string
}

export default function ChampionImage({ src, alt }: ChampionImageProps) {
  // TODO: 待接入 CDN 圖片後，將 valid 改為 true
  const [valid, setValid] = useState(false)

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded">
      {!src || !valid ? (
        <ImagePlaceholder>No Image</ImagePlaceholder>
      ) : (
        <Image
          fill
          src={src}
          alt={alt}
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
