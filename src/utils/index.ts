import type { IQuery } from '@/types'

export const getURLByQuery = (ID: number, query: IQuery) => {
  const baseURL = `https://opentdb.com/api.php?category=${ID}`

  const queryToArray = Object.entries(query)

  const URL = queryToArray.reduce((accum, curr) => {
    const [key, value] = curr
    if (value !== 'mix') {
      accum += `&${key}=${value}`
    }

    return accum
  }, baseURL)

  return URL
}
