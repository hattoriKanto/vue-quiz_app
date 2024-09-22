export interface IQuery {
  amount: string
  difficulty: string
  type: string
}

export interface IFetchedCategory {
  id: number
  name: string
}

export interface ICategory extends IFetchedCategory {
  imageName: string
}
