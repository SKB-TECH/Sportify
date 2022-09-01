import {AiOutlineBars} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BsJournalAlbum,BsMusicNoteList} from 'react-icons/bs'
import {FaMusic} from 'react-icons/fa'
import {HiOutlineSearchCircle} from 'react-icons/hi'

export const menu=[{
          name: 'Menu',
          icon: <AiOutlineBars />,
        },
        {
          name: 'Arists',
          icon: <BiUser/>,
        },
  
        {
          name: 'Albums',
          icon: <BsJournalAlbum/>,
        },
        {
            name: 'Rechercher',
            icon: <HiOutlineSearchCircle/>,
          },
        {
          name: 'Songs',
          icon: <FaMusic/>,
        },
        {
          name: 'PlayList',
          icon: <BsMusicNoteList />,
        }
]
