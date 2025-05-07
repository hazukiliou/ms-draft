import ChampionPool from '@/components/champion/ChampionPool'
import TeamPanel from '@/components/team/TeamPanel'

export default function DraftBoard() {
  return (
    <div className="mt-6 grid h-full grid-cols-[1fr_2fr_1fr] gap-4">
      <TeamPanel side="left" />
      <ChampionPool />
      <TeamPanel side="right" />
    </div>
  )
}
