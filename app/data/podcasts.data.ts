import { Podcast } from "../types";
import daPengCover from './assets/dapeng.jpg'
import teaTimeCover from './assets/tea-time-chinese.jpg'
import dashuCover from './assets/dashu.jpg'
import chinesePodCover from './assets/chinese-pod.jpg'
import bearTalkCover from './assets/bear-talk.png'
import chillChatCover from './assets/chill-chat.jpeg'
import coffeeBreakCover from './assets/coffee-break-chinese.jpeg'
import mandarinMonkeyCover from './assets/mandarin-monkey.png'
import mandarinWithMissLinCover from './assets/mandarin-with-miss-lin.jpeg'
import mandarinPodCover from './assets/mandarin-pod.jpeg'
import slowChineseCover from './assets/slow-chinese.jpeg'
import talkChineasyCover from './assets/talk-chineasy.jpeg'
import theAbcStorytimeCover from './assets/the-abc-storytime.png'
import lctsCover from './assets/TCTS.jpeg'
import mianBaoCover from './assets/mian-bao.webp'
import ILoveLearningChineseCover from './assets/i-love-learning-chinese.jpg'
import imLearningChineseCover from './assets/im-learning-chinese.jpg'
import learnChinese101Cover from './assets/learn-chinese-101.jpg'
import chineseLessonsWithSergeMelkyn from './assets/chinese-lessons-with-serge-melnyk.jpg'

export const PODCASTS: Podcast[] = [
  {
    id: 1,
    name: 'DaPeng Chinese',
    summary: 'An engaging show with a charismatic host teaching useful Chinese expressions, featuring interactive "ask fast, reply fast" 快問快答 segments with students.',
    description: 'content',
    coverImage: daPengCover,
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    links: [],
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
    links: [],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 3,
    name: 'DaShu Mandarin',
    summary: 'Fun Chinese learning where 3 teachers from mainland China & Taiwan tackle culture, current events, and daily life.',
    description: 'Dashu Mandarin offers a refreshing take on learning Chinese through its engaging podcast format. The dynamic trio consists of two hosts from mainland China and one from Taiwan, each with their own distinct teaching styles and regional accents, allowing you to compare and contrast the nuances of different Mandarin pronunciations.\n\nThe show tackles a variety of topics ranging from daily life and culture to current events in China, equiping listeners with the confidence to navigate conversations in natural settings. The lighthearted approach and the hosts\' passion for Chinese language and culture make learning feel less like a chore and more like an enjoyable journey.',
    coverImage: dashuCover,
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    isActive: true,
    episodesCount: 97,
    since: new Date(2022, 5, 30),
    links: [
      'https://www.youtube.com/channel/UCfsNycNoClXZA1FuUJSGT0w',
      'https://www.patreon.com/dashumandarin',
      'https://podcasts.apple.com/cz/podcast/dashu-mandarin-podcast/id1614411825',
      'https://anchor.fm/s/88ca316c/podcast/rss'
    ],
    levels: ['upper-intermediate', 'advanced']
  },
  {
    id: 4,
    name: 'ChinesePod',
    summary: 'Comprehensive Chinese learning resource with thousands of lessons.',
    description: `ChinesePod episodes cover a wide range of helpful topics for beginners, like basic Mandarin greetings and simple phone calls. The hosts typically play a dialogue in Mandarin and then translate it to English. They also explain different grammar rules related to the conversation.
When you’re no longer a beginner, you can move on to the intermediate and advanced levels of the podcast.`,
    coverImage: chinesePodCover,
    links: [
      'https://www.chinesepod.com/',
      'https://anchor.fm:443/s/109bf914/podcast/rss#beginner',
      'https://anchor.fm/s/317bc3a8/podcast/rss#intermediate',
      'https://anchor.fm/s/317e2da0/podcast/rss#advanced',
      'https://x.com/chinesepod?lang=en',
      'https://www.facebook.com/ChinesePod/',
      'https://www.youtube.com/channel/UCRY8eBLd9tPFw5-JY7S7O8Q',
      'https://open.spotify.com/show/2WfRQRTZ2ZzEx3SjdTDFjw',
      'https://open.spotify.com/show/1Id0UxjLX4msbvofGl6uMX',
      'https://open.spotify.com/show/6eXW86uIBQRkco1WsKZr6P',
      'https://soundcloud.com/chinesepod',
      'https://podcasts.apple.com/us/podcast/chinesepod-beginner/id1489328856',
      'https://podcasts.apple.com/us/podcast/chinesepod-intermediate/id1529834171',
      'https://podcasts.apple.com/us/podcast/chinesepod-advanced/id1529838325'
    ],
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['beginner', 'intermediate', 'upper-intermediate', 'advanced'],
    episodeCount: 4000,
    isActive: true,
    since: new Date('2005-01-01'),
    hasVideo: true,
    avarageEpisodeMinutesDuration: 20,
    transcript: { available: true, format: 'pdf', paid: true }
  },
  {
    id: 5,
    name: 'Slow Chinese',
    summary: 'Simple stories read slowly to help with comprehension.',
    description: 'Provides short, easy-to-understand stories and news articles read slowly, perfect for improving listening skills.',
    coverImage: slowChineseCover,
    links: ['https://slow-chinese.com'],
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['beginner', 'intermediate'],
    episodeCount: 200,
    isActive: true,
    since: new Date('2012-01-01'),
    hasVideo: false,
    avarageEpisodeMinutesDuration: 10,
    transcript: { available: true, format: 'pdf', paid: false }
  },
  {
    id: 6,
    name: 'Coffee Break Chinese',
    summary: 'Bite-sized lessons focusing on conversational Chinese.',
    description: 'Designed for learners who want to practice speaking and listening in a manageable, time-efficient way.',
    coverImage: coffeeBreakCover,
    links: ['https://coffeebreakchinese.com'],
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['beginner', 'intermediate'],
    episodeCount: 100,
    isActive: true,
    since: new Date('2017-01-01'),
    hasVideo: false,
    avarageEpisodeMinutesDuration: 15,
    transcript: { available: true, format: 'pdf', paid: true }
  },
  {
    id: 7,
    name: 'Learn Taiwanese Mandarin With Miss Lin',
    description: `大家好，我是林老師! This is MandarinWithMissLin from Taiwan. I'm from Taipei, Taiwan.  I hope this Podcast can help you train your Chinese listening skill and learn natural Taiwanese Mandarin vocabulary and phrases.  
My mission is to help learners to speak Chinese naturally, to help you learn authentic Taiwanese Mandarin, and discover Taiwanese culture. To learn more with me , please take a look at my courses or my Youtube channel.  More free Taiwanese Mandarin sources on my website.  https://www.taiwanesemandarinwithmisslin.com 
Big thank you to my students on Patreon. I now provide transcript service for Elephant Mountain tier so you can study pinyin and zhuyin PDFs with each episode. 
❤️ Thank you for your support along the way.`,
    coverImage: mandarinWithMissLinCover,
    links: [
      'https://mandarin-with-miss-lin.teachable.com/',
      'https://www.youtube.com/c/MandarinWithMissLin',
      'https://podcasts.apple.com/us/podcast/id1568922727',
      'https://open.spotify.com/show/7IClvW8rAiygUFwfffe0IC',
      'https://www.patreon.com/MandarinWithMissLin'
    
    ],
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['beginner', 'intermediate'],
    episodeCount: 36,
    isActive: true,
    since: new Date(2022, 4, 30),
    hasVideo: true,
    avarageEpisodeMinutesDuration: 10,
    transcript: { available: true, format: 'pdf', paid: true }
  },
  {
    id: 8,
    name: 'Mandarin Monkey Podcast',
    description: 'Chinese and English Language podcast. A mixed couple (Tom & Ula) living in Taiwan, teach Chinese through the use of Chinglish (Chinese and English) on a variety of topics. Learn Chinese, study methods, Entertainment, news, life, business, hints and tricks to learning Mandarin. Hear a native speaking naturally and at natural pace but with the English translation so you can follow the context of the conversation. Enjoy.',
    coverImage: mandarinMonkeyCover,
    links: [
      'https://mandarinmonkey.com/mandarin-monkey-podcast/',
      'https://open.spotify.com/show/3o2yEjugwZ00HRynW8ZNCG',
      'https://www.youtube.com/@MandarinMonkey',
      'https://soundcloud.com/mandarin-monkey',
      'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zb3VuZGNsb3VkLmNvbS91c2Vycy9zb3VuZGNsb3VkOnVzZXJzOjQ5NTM5NDUzNi9zb3VuZHMucnNz',
      'https://feeds.soundcloud.com/users/soundcloud:users:495394536/sounds.rss'

    ],
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['beginner', 'intermediate', 'advanced'],
    episodeCount: 365,
    isActive: true,
    since: new Date(2018, 7, 18),
    hasVideo: true,
    avarageEpisodeMinutesDuration: 70,
    transcript: { available: true, format: 'pdf', paid: false }
  },
  {
    id: 9,
    name: 'Learn Chinese Now',
    description: `Follow Jared, Ben and several guest stars as they take you through essential phrases, latest news, and some interesting vocabulary analysis! `,
    links: [
      'https://www.youtube.com/user/learnchinesenow'
    ],
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['beginner', 'intermediate'],
    episodeCount: 268,
    isActive: true,
    since: new Date(2010, 8, 10),
    hasVideo: true,
    avarageEpisodeMinutesDuration: 5,
    transcript: { available: false }
  },
  {
    id: 10,
    name: 'Chinese Lessons with Serge Melnyk',
    summary: 'Comprehensive Mandarin lessons for various proficiency levels.',
    description: `Detailed lessons covering grammar, vocabulary, and basic dialogs tailored for absolute beginners.
Only the first 100 episodes are free to listen, the rest and the transcripts are available after becoming a member.`,
    coverImage: chineseLessonsWithSergeMelkyn,
    links: [
      'https://melnyks.com',
      'https://open.spotify.com/show/6oPfmkjNYuORPUDNYYhi5f',
      'https://podcasts.apple.com/us/podcast/learn-mandarin-chinese-chinese-audio-lessons/id119843495',
      'https://www.melnyks.com/?feed=podcast#rss'
    ],
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['beginner'],
    episodeCount: 276,
    isActive: true,
    hasVideo: false,
    avarageEpisodeMinutesDuration: 20,
    transcript: { available: true, format: 'pdf', paid: true }
  },
  {
    id: 11,
    name: 'Learn Chinese | ChineseClass101.com',
    description: `Whether you are student or a seasoned speaker, our lessons offer something for everyone. We incorporate culture and current issues into each episode to give the most informative, both linguistically and culturally, podcasts possible.
For those of you with just the plane ride to prepare, check our survival phrase series at . One of these phrases just might turn your trip into the best one ever!`,
    coverImage: learnChinese101Cover,
    links: [
      'https://chineseclass101.com',
      'https://open.spotify.com/show/2hvrzlYdSbVXp4v2nANEbO',
      'https://podcasts.apple.com/ca/podcast/learn-chinese-chineseclass101-com/id317130752',
      'https://www.youtube.com/channel/UCJhnlRY-oKpanPGSvL8Ml8Q',
      'https://soundcloud.com/chineseclass101com',
      'https://www.chineseclass101.com/wp-feed-audio.php#rss'
    
    ],
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['beginner'],
    episodeCount: 66,
    isActive: true,
    since: new Date(2014, 9, 25),
    hasVideo: true,
    avarageEpisodeMinutesDuration: 5,
    transcript: { available: false }
  },
  {
    id: 13,
    name: 'I\'m Learning Mandarin',
    summary: 'Very interesting monologs and interviews from a Chinese learner, with an easy to undertand accent using not too complex vocabulary.',
    description: 'I\'m Learning Mandarin is a bilingual podcast that dives deep into the questions that matter to Chinese learners. Host, Mischa Wilmers, talks to the world\'s leading Mandarin scholars and tells stories in Chinese, drawing on his own experience of self-studying the language to fluency.',
    coverImage: imLearningChineseCover,
    links: [
      'https://imlearningmandarin.com/',
      'https://podcasts.apple.com/gb/podcast/id1581738411',
      'https://open.spotify.com/show/2sYE96nVd30x1zyjcBsHdj',
      'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82NDdjYzQzYy9wb2RjYXN0L3Jzcw==',
      'https://anchor.fm/s/647cc43c/podcast/rss'
    ],
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['upper-intermediate', 'advanced'],
    episodeCount: 150,
    isActive: true,
    since: new Date(2021, 6, 25),
    hasVideo: false,
    avarageEpisodeMinutesDuration: 46,
    transcript: { available: false }
  },
  {
    id: 14,
    name: 'I Love Learning Chinese',
    summary: 'An lovely podcast hosted by Ashley and her dad, focusing on practical language and cultural insights.',
    description: `A lovely podcast hosted by Ashley and her dad, focusing on practical language skills and cultural insights. Designed for beginners progressing to the intermediate level. Despite a 10-year hiatus, Ashley has made all episodes and their accompanying PDF transcripts available in a Google Drive folder.
Definitely worth listening.`,
    coverImage: ILoveLearningChineseCover,
    links: [
      'https://www.facebook.com/ilovelearningchinese/',
      'https://drive.google.com/drive/folders/17E9eQ4Q2aJ_Fa5Vb1eCCKHXvfZl4ZyDM'
    ],
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['beginner'],
    episodeCount: 157,
    isActive: false,
    since: new Date(2014, 0, 1),
    hasVideo: false,
    avarageEpisodeMinutesDuration: 15,
    transcript: { available: true, format: 'pdf', paid: false }
  },
  {
    id: 15,
    name: 'BreadToast Chinese 面包吐思',
    summary: 'Distended podcast that with a host clear mandarin and doesn\'t speak too quickly, but interviews other speakers with accents, making it a great learning resource',
    description: `Who says our 心s aren't invited to the language-learning party? BreadToast Chinese 面包吐思 Season 3 is here in all its entertaining and thought-provoking glory!
-Season 2: alternating weekly episodes of two awesome series which will go live as separate shows in the near future: 《等我音乐》 and 《南腔北调》!
-Season 1: Each oldie-but-goodie episode is an engaging conversation between host Brad Johnson and a Chinese friend or two on an interesting topic. That's it! Give it a 听 and join in on some great discussions.
Provides lessons that are engaging and fun, with a focus on practical language use and cultural insights.`,
    coverImage: mianBaoCover,
    links: [
      'https://podcasts.apple.com/us/podcast/id1444274999',
      'https://open.spotify.com/show/6Fz1yve3MpMgQu2H133vfL',
      'https://rephonic.com/podcasts/breadtoast-chinese-mian-bao-tu-si'
    ],
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['upper-intermediate'],
    episodeCount: 25,
    isActive: false,
    since: new Date(2018, 10, 10),
    hasVideo: false,
    avarageEpisodeMinutesDuration: 30,
    transcript: { available: true, format: 'pdf', paid: false }
  },
  {
    id: 16,
    name: 'Learning Chinese Through Storie',
    description: `Using more than 99% target language, LCTS听故事说中文 creates authentic and immersive Chinese language podcast. It covers a wide range of topics and proficiency levels(Novice, Intermediate, Advanced). Every story has two parts: story (A) and story explanation (B), accompanied by annotated vocabulary and transcript. For example, an episode titled "2.3.12 A" means this episode is at the level of Intermediate High (2.3), is the 12th episode created for this level, and is the story, not story explanation. You can also read along with the stories and explanations by becoming our patrons.
Provides lessons that are engaging and fun, with a focus on practical language use and cultural insights.`,
    coverImage: lctsCover,
    links: [
      'https://learningchinesethroughstories.com/',
      'https://www.patreon.com/learningchinesethroughstories',
      'https://open.spotify.com/show/04re9FvL1xviHGWvXKoAhZ',
      'https://www.youtube.com/channel/UCDSSndxcaLY--_eS5p9a2rQ',
      'http://learningchinesethroughstories.libsyn.com/rss'
    ],
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['beginner', 'intermediate', 'upper-intermediate', 'advanced'],
    episodeCount: 609,
    isActive: true,
    since: new Date(2015, 8, 19),
    hasVideo: true,
    avarageEpisodeMinutesDuration: 30,
    transcript: { available: true, format: 'pdf', paid: true }
  },
  {
    id: 17,
    name: 'ChillChat',
    description: `If you’re at the beginner or intermediate level and need just one Chinese language podcast to listen to, then consider ChillChat. The hosts combine conversations about current trends and Chinese culture with vocabulary and grammar.
The podcast is in both English and Mandarin, which is a plus if you find podcasts that are exclusively in Mandarin too difficult to listen to.
If you join the ChillChat paid membership, then you’ll get access to podcast transcripts and other extra learning materials, depending on how much you pay.`,
    coverImage: chillChatCover,
    links: [
      'https://chillchat.buzzsprout.com/',
      'https://podcasts.apple.com/us/podcast/chillchat-learn-chinese-and-chill/id1475774488',
      'https://open.spotify.com/show/2sDFonL2zLsr4KOHAGjEQ8',
      'https://feeds.buzzsprout.com/510028.rss',
      'https://buymeacoffee.com/chillingchinese',
      'https://www.patreon.com/chillingchinese'
    ],
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['beginner'],
    episodeCount: 231,
    isActive: true,
    since: new Date(2015, 8, 19),
    hasVideo: true,
    avarageEpisodeMinutesDuration: 20,
    transcript: { available: true, format: 'pdf', paid: true }
  },
  {
    id: 18,
    name: 'BearTalk 狗熊有话说',
    description: `BearTalk Podcast is a Chinese podcast that shares technology insights, book reviews, and personal improvement tips since 2012. BearTalk Podcast was the Editor's Choice of iTunes China in 2013, which has more than 60,000 listeners.
Since then, the host (Bear Liu) has covered topics ranging from book reviews to self-development advice and artificial intelligence.
Since this isn't a language-learning podcast, you need a high level of Chinese proficiency to follow along. With regular listening, you'll train your ears to understand real-world Mandarin. And you’ll expand your vocabulary, too.`,
    coverImage: bearTalkCover,
    links: [
      'https://beartalking.com/podcast',
      'https://podcasts.apple.com/us/podcast/id544563053',
      'https://open.spotify.com/show/4aJ7d47y8IOeqGZLNE81Yz',
      'https://open.spotify.com/show/4aJ7d47y8IOeqGZLNE81Yz',
      'https://feeds.redcircle.com/936a3212-92e5-41c7-b6f9-39e3596adeb8#rss',
      'https://www.youtube.com/@Bearbig/podcasts'
    ],
    targetLanguage: 'mandarin-chinese',
    mediumLanguage: 'english',
    levels: ['advanced'],
    episodeCount: 482,
    isActive: true,
    since: new Date(2012, 6, 13),
    hasVideo: true,
    avarageEpisodeMinutesDuration: 30,
    transcript: { available: false }
  },
]
