import { useState, useEffect } from "react";
import axios from 'axios'
import {baseUrl, speciesTypes} from '@/helpers/constants'
import {debounce} from '@/helpers/debounce'
import {getFavorites} from '@/helpers/favorites'
import SwitchFilter from '@/components/SwitchFilter'
import CharacterCard from '@/components/CharacterCard'
import Pagination from '@/components/Pagination'
import {Cards, Header, CheckboxWrapper} from '@/styling/Form'
import {SearchFilter} from '@/styling/SearchFilter'
import {FilterWrapper} from './styled.jsx'

export default function Characters() {
  const [activeType, setActiveType] = useState(speciesTypes[0])
  const [searchValue, setSearchValue] = useState('')
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState({pages: 1, next: false, prev: false})
  const [currentPage, setCurrentPage] = useState(1)
  const [favorites, setFavorites] = useState([])
  const [isOnlyFavorites, onToggleOnlyFavorites] = useState(false)

  useEffect(() => {
    setFavorites(getFavorites())
  }, [])

  useEffect(() => {
    const onlyDigit = /\d+/;
    const type = activeType.id === 1 ? '' : activeType.value
    axios.get(`${baseUrl}/api/character/?name=${searchValue}&species=${type}&page=${currentPage}`)
      .then(({data}) => {
          onToggleOnlyFavorites(false)
          const actualPage = !!data.info.next ? onlyDigit.exec(data.info.next)[0] - 1 : data.info.pages
          setData(data.results);
          setPagination({
            pages: data.info.pages,
            next: !!data.info.next,
            prev: !!data.info.prev,
          });
          setCurrentPage(actualPage)
      })
  }, [searchValue, activeType, currentPage])

  return (
    <div>
      <Header>Characters</Header>
      <FilterWrapper>
        <SwitchFilter activeType={activeType} setActiveType={setActiveType}/>
        <CheckboxWrapper>
          <label htmlFor='onlyFavorites'>Only Favorites</label>
          <input id="onlyFavorites" type="checkbox" value={isOnlyFavorites} onChange={() => onToggleOnlyFavorites(!isOnlyFavorites)}/>
        </CheckboxWrapper>
        <SearchFilter onChange={(e) => setSearchValue(e.target.value)} placeholder="Search by name..."/>
      </FilterWrapper>
      <Cards>
        {data.filter(character => {
          if (!isOnlyFavorites) {
            return character
          }
          return favorites.includes(character.id)
        }).map(character => <CharacterCard favorites={favorites} setFavorites={setFavorites} key={character.id} info={character} />)}
      </Cards>
      {!isOnlyFavorites && <Pagination pagination={pagination} currentPage={currentPage} handleChangePage={setCurrentPage}/>}
    </div>
  )
}