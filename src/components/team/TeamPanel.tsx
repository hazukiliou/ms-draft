import BanList from '@/components/team/BanList'
import PickList from '@/components/team/PickList'

export default function TeamPanel({ side }: { side: 'blue' | 'red' }) {
  const bg = side === 'blue' ? 'bg-blue-100' : 'bg-red-100'

  return (
    <div className={`${bg} h-full rounded-md p-4 text-center`}>
      <div className="flex flex-1 flex-col justify-between gap-4">
        <PickList side={side} />
        <BanList side={side} />
      </div>
    </div>
  )
}
