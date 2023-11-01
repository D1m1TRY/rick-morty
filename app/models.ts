export interface ICharacterShort {
    id: number,
    species: string,
    name: string,
    image: string,
    gender: string
}

export interface IFavorites {
    favorites: [number]
    setFavorites: () => void
}
