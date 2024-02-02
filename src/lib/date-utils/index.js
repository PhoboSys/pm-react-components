import { format, formatDistanceStrict, intervalToDuration, differenceInSeconds } from 'date-fns'
import { es, enUS } from 'date-fns/locale'

import config from '@config'

export const INVALID_DATE = new Date(NaN)

const LOCALES = {
  'en': enUS,
  'en-US': enUS,
  'es': es
}

let locale = LOCALES[config.default_locale]

export function setLocaleDateFns(newlocale) {
  if (newlocale !== locale.code && newlocale in LOCALES) {
    locale = LOCALES[newlocale]
  }
}

export function toUnixTS(timestamp) {
  return parseInt(timestamp / 1000)
}

export function nowUnixTS() {
  return toUnixTS(Date.now())
}

export function timeSinceUnixTS(
  datefrom,
  dateto = nowUnixTS(),
  options = { addSuffix: true }
) {
    return formatDistanceUnixTS(datefrom, dateto, options)
}

export function formatDistanceUnixTS(
  datefrom,
  dateto = nowUnixTS(),
  options = {}
) {

  datefrom = datefrom * 1000
  dateto = dateto * 1000
  let distance = formatDistance(datefrom, dateto, options)

  if (options?.short) {
    const [value, units] = distance?.split(' ')
    distance = [value, units?.[0]].join(' ')
  }

  return distance
}

export function formatDistance(
  datefrom,
  dateto = Date.now(),
  options = {}
) {

  datefrom = toDate(datefrom)
  dateto = toDate(dateto)

  if (
    isEqual(datefrom, INVALID_DATE) ||
    isEqual(dateto, INVALID_DATE)
  ) {
    return ''
  }

  return formatDistanceStrict(datefrom, dateto, { ...options, locale })

}

export function toDate(date) {
  // parameters validaton
  if (
    !date instanceof Date &&
    !(typeof date === 'string') &&
    !(typeof date === 'number')
  ) return INVALID_DATE

  const datetime = new Date(date)
  // validate datetime
  if (isNaN(datetime.getTime())) return INVALID_DATE

  return datetime
}

const isEqual = (first, second) => {
  if (first === second) {
    return true
  }
  if ((first === undefined || second === undefined || first === null || second === null)
    && (first || second)) {
    return false
  }
  const firstType = first?.constructor.name
  const secondType = second?.constructor.name
  if (firstType !== secondType) {
    return false
  }
  if (firstType === 'Array') {
    if (first.length !== second.length) {
      return false
    }
    let equal = true
    for (const i in first) {
      if (!isEqual(first[i], second[i])) {
        equal = false
        break
      }
    }
    return equal
  }
  if (firstType === 'Object') {
    let equal = true
    const fKeys = Object.keys(first)
    const sKeys = Object.keys(second)
    if (fKeys.length !== sKeys.length) {
      return false
    }
    for (const i in fKeys) {
      if (first[fKeys[i]] && second[fKeys[i]]) {
        if (first[fKeys[i]] === second[fKeys[i]]) {
          continue // eslint-disable-line
        }
        if (first[fKeys[i]] && (first[fKeys[i]].constructor.name === 'Array'
          || first[fKeys[i]].constructor.name === 'Object')) {
          equal = isEqual(first[fKeys[i]], second[fKeys[i]])
          if (!equal) {
            break
          }
        } else if (first[fKeys[i]] !== second[fKeys[i]]) {
          equal = false
          break
        }
      } else if ((first[fKeys[i]] && !second[fKeys[i]]) || (!first[fKeys[i]] && second[fKeys[i]])) {
        equal = false
        break
      }
    }
    return equal
  }

  return first === second
}
