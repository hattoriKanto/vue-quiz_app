import type { IQuestion } from '@/types'
import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore('questionStore', {
  state: () => ({
    questions: <IQuestion[]>[]
  })
})
