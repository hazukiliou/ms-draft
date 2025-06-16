import PickHistoryItem from '@/components/team/PickHistoryItem'

const fakeHistory = [
  {
    game: 1,
    bluePick: ['Aatrox', 'Ahri', 'LeeSin', 'Ezreal', 'Thresh'],
    redPick: ['Renekton', 'Syndra', 'JarvanIV', 'Jinx', 'Nautilus'],
  },
  {
    game: 2,
    bluePick: ['Gnar', 'Orianna', 'Vi', 'Aphelios', 'Leona'],
    redPick: ['Camille', 'Akali', 'XinZhao', 'Lucian', 'Yuumi'],
  },
  {
    game: 3,
    bluePick: ['Gragas', 'TwistedFate', 'Sejuani', 'Zeri', 'Rakan'],
    redPick: ['Kennen', 'Sylas', 'Wukong', 'Kaisa', 'Milio'],
  },
]

export default function PickHistoryList() {
  return (
    <div className="mt-4 space-y-2">
      {fakeHistory.map((item) => (
        <PickHistoryItem key={item.game} {...item} />
      ))}
    </div>
  )
}
