type AmountType = 5 | 10
type DifficultyType = 'mix' | 'easy' | 'medium' | 'hard'
type QueryType = 'mix' | 'boolean' | 'multiple'

export interface IQuery {
  amount: AmountType
  difficulty: DifficultyType
  type: QueryType
}

export interface ICategory {
  id: number
  name: string
}
