import PickList from '@/components/team/PickList'

export default function TeamPanel({ side }: { side: 'blue' | 'red' }) {
  const bg = side === 'blue' ? 'bg-blue-100' : 'bg-red-100'

  return (
    <div className={`${bg} h-full rounded-md p-4 text-center`}>
      {side === 'blue' ? '🔵' : '🔴'}
      <PickList side={side} />
    </div>
  )
}
