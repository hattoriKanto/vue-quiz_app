import type { ICategory, IFetchedCategory, IQuery } from '@/types'

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

export const createCategories = (fetchedCategories: IFetchedCategory[]) => {
  const createdCategories = fetchedCategories.reduce((accum, curr) => {
    const imageName = curr.name.split('').reduce((word, char) => {
      if (char.match(/[^\w]|\s/)) {
        word += ''
      } else {
        word += char
      }

      return word
    }, '')
    const category = {
      ...curr,
      imageName
    }

    accum.push(category)

    return accum
  }, [] as ICategory[])

  return createdCategories
}
