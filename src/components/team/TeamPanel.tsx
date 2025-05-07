export default function TeamPanel({ side }: { side: 'left' | 'right' }) {
  const bg = side === 'left' ? 'bg-blue-100' : 'bg-red-100'

  return (
    <div className={`${bg} h-full rounded-md p-4 text-center`}>{side === 'left' ? '🔵' : '🔴'}</div>
  )
}
