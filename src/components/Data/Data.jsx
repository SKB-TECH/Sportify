import {AiOutlineBars} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BsJournalAlbum,BsMusicNoteList} from 'react-icons/bs'
import {FaMusic} from 'react-icons/fa'


export const menu=[
        {
          name: 'artist',
          icon: <BiUser/>,
        },
  
        {
          name: 'album',
          icon: <BsJournalAlbum/>,
        },
        {
          name: 'track',
          icon: <FaMusic/>,
        },
        {
          name: 'PlayList',
          icon: <BsMusicNoteList />,
        }
]
