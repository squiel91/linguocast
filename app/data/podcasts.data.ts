import { Podcast } from "../types";
import daPengCover from './assets/dapeng.jpg'
import teaTimeCover from './assets/tea-time-chinese.jpg'
import dashuCover from './assets/dashu.jpg'
import chinesePodCover from './assets/chinesepod.jpg'
import ezeAvatar from './assets/authors/eze.jpg'

export const podcasts: Podcast[] = [
  {
    id: 1,
    name: 'DaPeng Chinese',
    summary: 'A distended show with a carithmatic host that teaches usefull chinese expressions and host \'ask fast reply fast.\' (快問快答) with other students.',
    description: 'content',
    coverImage: daPengCover,
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['intermediate', 'upper-intermediate']
  },
  {
    id: 2,
    name: 'Tea-time Chinese',
    description: 'Basic podcast',
    summary: 'Is a good podcast',
    coverImage: teaTimeCover,
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['beginner', 'intermediate']
  },
  {
    id: 3,
    name: 'ChinesePod',
    summary: 'A distended show with a carithmatic host that teaches usefull chinese expressions and host \'ask fast reply fast.\' (快問快答) with other students.',
    description: 'content',
    coverImage: chinesePodCover,
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['beginner', 'intermediate', 'upper-intermediate', 'advanced']
  },
  {
    id: 4,
    name: 'DaShu Mandarin',
    summary: 'Fun Chinese learning where 3 teachers from mainland China & Taiwan tackle culture, current events, and daily life.',
    description: 'Dashu Mandarin offers a refreshing take on learning Chinese through its engaging podcast format. The dynamic trio consists of two hosts from mainland China and one from Taiwan, each with their own distinct teaching styles and regional accents, allowing you to compare and contrast the nuances of different Mandarin pronunciations.\n\nThe show tackles a variety of topics ranging from daily life and culture to current events in China, equiping listeners with the confidence to navigate conversations in natural settings. The lighthearted approach and the hosts\' passion for Chinese language and culture make learning feel less like a chore and more like an enjoyable journey.',
    coverImage: dashuCover,
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    isActive: true,
    numberOfEpisodes: 97,
    since: new Date(2022, 5, 30),
    links: [
      'https://www.youtube.com/channel/UCfsNycNoClXZA1FuUJSGT0w',
      'https://www.patreon.com/dashumandarin',
      'https://podcasts.apple.com/cz/podcast/dashu-mandarin-podcast/id1614411825',
      'https://anchor.fm/s/88ca316c/podcast/rss'
    ],
    levels: ['upper-intermediate', 'advanced']
  },
]
