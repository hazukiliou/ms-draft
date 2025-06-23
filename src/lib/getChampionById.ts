import type { Champion } from '@/types/champion'

export const getChampionById = (champions: Champion[], id?: Champion['id']) => {
  if (!id) return null
  return champions.find((c) => c.id === id) ?? null
}
