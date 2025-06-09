import clsx from 'clsx'

interface ImagePlaceholderProps {
  children?: React.ReactNode
  className?: string
}

export default function ImagePlaceholder({ children, className }: ImagePlaceholderProps) {
  return (
    <div
      className={clsx(
        'flex h-full w-full items-center justify-center rounded bg-zinc-700',
        'text-xs text-zinc-400',
        className
      )}
    >
      {children}
    </div>
  )
}
