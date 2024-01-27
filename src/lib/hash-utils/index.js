import { BETTOR_ICON_COLORS } from '@constants/avatarsColors'

export function numericHash(s) {
  let h = 0
  if (!s || !s.length) return h

  for (let i = 0; i < s.length; i++)
    h = Math.imul(31, h) + s.charCodeAt(i) | 0

  return Math.abs(h)
}

export function colorHash(name) {
  const hash = numericHash(name)
  const colorId = hash % BETTOR_ICON_COLORS.length
  return BETTOR_ICON_COLORS[colorId]
}
