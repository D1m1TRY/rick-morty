import axios from "axios"
import {baseUrl} from './constants'

export default function getCharactersBy(name: string, value: string) {
  return axios.get(`${baseUrl}/api/character/?${name}=${value}`)
}