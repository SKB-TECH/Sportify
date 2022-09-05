import {AiOutlineBars} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BsJournalAlbum,BsMusicNoteList} from 'react-icons/bs'
import {FaMusic} from 'react-icons/fa'
import {HiOutlineSearchCircle} from 'react-icons/hi'

export const menu=[
        {
          name: 'Artist',
          icon: <BiUser/>,
        },
  
        {
          name: 'Albums',
          icon: <BsJournalAlbum/>,
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
