export enum AmountType {
  five = '5',
  ten = '10'
}
export enum DifficultyType {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
  All = 'mix'
}
export enum QuestionsType {
  'True/False' = 'boolean',
  'Multiple' = 'multiple',
  All = 'mix'
}

export interface IQuery {
  amount: AmountType
  difficulty: DifficultyType
  type: QuestionsType
}

export interface IFetchedCategory {
  id: number
  name: string
}

export interface ICategory extends IFetchedCategory {
  imageName: string
}
