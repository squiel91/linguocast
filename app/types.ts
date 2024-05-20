import { LANGUAGES } from './constants/languages.constants'
import { LEVELS } from './constants/levels.constants'

export type Level = typeof LEVELS[number]
export type Language = typeof LANGUAGES[number]['code']

export interface Podcast {
  id: number
  name: string
  summary: string
  description: string
  coverImage: string
  episodeCount?: number
  isActive?: boolean
  since?: Date
  numberOfEpisodes?: number
  links?: string[] 
  targetLanguage: Language
  mediumLanguage?: Language
  levels: Level[]
}
