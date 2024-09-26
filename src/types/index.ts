export interface IQuery {
  amount: string
  difficulty: string
  type: string
}

export interface IQuestion {
  type: string
  difficulty: string
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface IFetchedCategory {
  id: number
  name: string
}

export interface ICategory extends IFetchedCategory {
  imageName: string
}
