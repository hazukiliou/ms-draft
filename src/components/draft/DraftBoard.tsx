import ChampionPool from '@/components/champion/ChampionPool'
import PickHistoryList from '@/components/team/PickHistoryList'
import TeamPanel from '@/components/team/TeamPanel'

export default function DraftBoard() {
  return (
    <div className="mx-auto mt-6 max-w-6xl space-y-4">
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-4">
        <TeamPanel side="blue" />
        <ChampionPool />
        <TeamPanel side="red" />
      </div>

      <PickHistoryList />
    </div>
  )
}
