import { LANGUAGES } from './constants/languages.constants'
import { LEVELS } from './constants/levels.constants'

export type Level = typeof LEVELS[number]
export type Language = typeof LANGUAGES[number]['code']

export interface Podcast {
  id: number
  name: string
  summary?: string // short description to show in the listing
  description: string
  coverImage?: string
  links: string[] 
  targetLanguage: Language
  mediumLanguage: Language // the language used to provide translations and explanations
  levels: Level[]
  episodeCount?: number
  isActive?: boolean
  since?: Date // first episode's date
  hasVideo?: boolean
  avarageEpisodeMinutesDuration?: number
  episodesCount?: number
  transcript?: {
    available: boolean
    format?: 'pdf' | 'video'
    paid?: boolean
  }
}
