import { useState, useEffect } from "react";
import {useRouter} from 'next/router'
import axios from 'axios'
import {baseUrl} from '@/helpers/constants'
import {CharacterDetails, CharacterImage, CharacterDescription, CharacterName, ActionBtn} from '@/styling/CharacterDescription'
import {Header} from '@/styling/Form'
import {CharacterDetailsWrapper} from './styled.jsx'

export default function Character() {
  const [data, setData] = useState([])
  const router = useRouter()
  const openedCharacterId = router.query.characterId

  useEffect(() => {
    axios.get(`${baseUrl}/api/character/${openedCharacterId}`)
      .then(({data}) => {
          setData(data);
      })
  }, [])
  
  const getFullYear = new Date(data.created).getFullYear()
  const getMonth = new Date(data.created).getMonth()
  const getDay = new Date(data.created).getDate()
  const createdDate = `${getDay}-${getMonth}-${getFullYear}`
  return (
    <div>
        <Header>Details</Header>
        <CharacterDetailsWrapper>
            <CharacterDetails>
                <CharacterDescription>
                    <p>Was Created: {createdDate} </p>
                    <CharacterName>{data.name}</CharacterName>
                    <p>Gender: {data.gender}</p>
                    <span>
                        <p>{data.species} - {data.status}</p>
                    </span>
                    <p>Last known location: {data.location?.name}</p>
                </CharacterDescription>
                <CharacterImage src={data.image} alt={data.name}/>
            </CharacterDetails>
        </CharacterDetailsWrapper>
    </div>
  )
}