import { defineStore } from 'pinia'
import { Amount, Difficulty, Questions } from '@/utils'
import { type IQuery } from '@/types'

export const useQuizConfigStore = defineStore('quizConfigStore', {
  state: (): IQuery => ({
    difficulty: Object.keys(Difficulty)[0],
    amount: Object.keys(Amount)[0],
    type: Object.keys(Questions)[0]
  })
})
