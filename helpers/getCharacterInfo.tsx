import axios from "axios"
import {baseUrl} from './constants'

export default {
    getCharacterInfo(id: number) {
      return axios.get(`${baseUrl}/api/character/${id}`)
    }
}