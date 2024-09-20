type AmountType = 5 | 10
type DifficultyType = 'mix' | 'easy' | 'medium' | 'hard'
type QueryType = 'mix' | 'boolean' | 'multiple'

export interface IQuery {
  amount: AmountType
  difficulty: DifficultyType
  type: QueryType
}

export interface IFetchedCategory {
  id: number
  name: string
}

export interface ICategory extends IFetchedCategory {
  imageName: string
}
