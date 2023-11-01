
export const getFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    if (!favorites) {
        return localStorage.setItem('favorites', JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem('favorites'))
}

export const isFavorite = (id) => {
    const favorites = getFavorites()
    return favorites.includes(id)
}
export const updateFavorites = (characterId) => {
    const favorites = getFavorites()
    const isCharacterExistInFavoritesList = isFavorite(characterId);

    if (isCharacterExistInFavoritesList) {
        const filteredArray = favorites.filter(id => id !== characterId);
        localStorage.setItem('favorites', JSON.stringify(filteredArray))
    } else {
        localStorage.setItem('favorites', JSON.stringify([...favorites, characterId]))
    }
}

