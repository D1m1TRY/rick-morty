import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {Card, CharacterImage, CharacterDescription, CharacterInfoWrapper, ActionBtn} from '@/styling/CharacterCard'
import {updateFavorites, isFavorite} from '@/helpers/favorites'
import {ICharacterShort, IFavorites} from '@/app/models'

interface CharacterCardProps {
    info: ICharacterShort,
    IFavorites,
}
export default function CharacterCard(props: CharacterCardProps) {
    const {favorites, setFavorites, info} = props
    const {species, name, image, gender, id} = info;

    const onHandleChangeFavorites = (characterId: number) => {
        updateFavorites(characterId)
        
        if (isFavorite(characterId)) {
           setFavorites([...favorites, characterId])
        } else {
            const filteredArray = favorites.filter(id => id !== characterId);
            setFavorites(filteredArray)
        }
    }
    return (
        <Card>
            <Link href={`/characters/${id}`}><CharacterImage alt={name} src={image}/></Link>
            <CharacterDescription>
                <CharacterInfoWrapper>
                    <Link href={`/characters/${id}`}>{name}</Link>
                    <p>Species - {species}</p>
                    <p>Gender - {gender}</p>
                </CharacterInfoWrapper>
                <ActionBtn onClick={() => onHandleChangeFavorites(id)}>{favorites.includes(id) ? 'Do not like' : 'Like'}</ActionBtn>
            </CharacterDescription>
        </Card>
    )
}