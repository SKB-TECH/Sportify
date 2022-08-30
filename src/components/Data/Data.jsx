import {AiOutlineBars} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BsJournalAlbum,BsMusicNoteList} from 'react-icons/bs'
import {FaMusic} from 'react-icons/fa'

const Menu=(
        {
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
          name: 'Songs',
          icon: <FaMusic/>,
        },
        {
          name: 'PlayList',
          icon: <BsMusicNoteList />,
        })

export default Menu;