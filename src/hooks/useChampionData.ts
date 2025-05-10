import { fakeChampions } from '@/data/mock/fakeChampions'
import type { Champion } from '@/types/champion'

export const useChampionData = (): Champion[] => {
  return fakeChampions
}
