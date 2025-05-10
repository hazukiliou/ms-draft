import Image from 'next/image'
import { useState } from 'react'

interface ChampionImageProps {
  src?: string
  alt: string
}

export default function ChampionImage({ src, alt }: ChampionImageProps) {
  // TODO: 待接入 CDN 圖片後，將 valid 改為 true
  const [valid, setValid] = useState(false)

  return (
    <div className="relative flex aspect-square w-full items-center justify-center rounded bg-zinc-700 object-cover text-xs text-zinc-400">
      {!src || !valid ? (
        'No Image'
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
