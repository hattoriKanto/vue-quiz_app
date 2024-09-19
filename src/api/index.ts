import axios from 'axios'
import type { IQuery } from '@/types'
import { getURLByQuery } from '@/utils'

export const fetchCategories = async () => {
  try {
    const URL = 'https://opentdb.com/api_category.php'
    const result = await axios.get(URL)

    return result.data
  } catch (error) {
    if (error instanceof Error) {
      console.error('An error occurred while fetching the categories:', error)
      throw new Error(error.message)
    }
  }
}

export const fetchQuestionsByCategoryID = async (ID: number, query: IQuery) => {
  try {
    const URL = getURLByQuery(ID, query)

    const result = await axios.get(URL)

    return result.data
  } catch (error) {
    if (error instanceof Error) {
      console.error('An error occurred while fetching the category:', error)
      throw new Error(error.message)
    }
  }
}
