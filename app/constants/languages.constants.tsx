import ukFlag from '../assets/flags/uk.svg'
import jpFlag from '../assets/flags/jp.svg'
import cnFlag from '../assets/flags/cn.svg'
import krFlag from '../assets/flags/kr.svg'
import deFlag from '../assets/flags/de.svg'
import uaFlag from '../assets/flags/ua.svg'
import ruFlag from '../assets/flags/ru.svg'
import frFlag from '../assets/flags/fr.svg'
import esFlag from '../assets/flags/es.svg'
import plFlag from '../assets/flags/pl.svg'
import ptFlag from '../assets/flags/pt.svg'
import itFlag from '../assets/flags/it.svg'
import maFlag from '../assets/flags/ma.svg'
import vnFlag from '../assets/flags/vn.svg'
import thFlag from '../assets/flags/th.svg'
import inFlag from '../assets/flags/in.svg'

export const LANGUAGES = [
  { code: 'arabic', name: 'Arabic', flag: <img src={maFlag} />  },
  { code: 'mandarin-chinese', name: 'Mandarin Chinese', flag: <img src={cnFlag} /> },
  { code: 'english', name: 'English', flag: <img src={ukFlag} /> },
  { code: 'french', name: 'French', flag: <img src={frFlag} /> },
  { code: 'german', name: 'German', flag: <img src={deFlag} /> },
  { code: 'hindi', name: 'Hindi', flag: <img src={inFlag} /> },
  { code: 'italian', name: 'Italian', flag: <img src={itFlag} /> },
  { code: 'japanese', name: 'Japanese', flag: <img src={jpFlag} /> },
  { code: 'korean', name: 'Korean', flag: <img src={krFlag} /> },
  { code: 'polish', name: 'Polish', flag: <img src={plFlag} /> },
  { code: 'portuguese', name: 'Portuguese', flag: <img src={ptFlag} /> },
  { code: 'russian', name: 'Russian', flag: <img src={ruFlag} /> },
  { code: 'spanish', name: 'Spanish', flag: <img src={esFlag} /> },
  { code: 'thai', name: 'Thai', flag: <img src={thFlag} /> },
  { code: 'ukrainian', name: 'Ukrainian', flag: <img src={uaFlag} /> },
  { code: 'vietnamese', name: 'Vietnamese', flag: <img src={vnFlag} /> }
] as const
