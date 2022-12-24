import React,{useContext} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './navbar.scss';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';



const Navbar = ()=>{
    const {dispatch}=useContext(DarkModeContext)
    return(
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type='text' placeholder='Search....'/>
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon' />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/>
                    </div>
                    <div className="item">
                       <FullscreenExitOutlinedIcon className='icon'/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <div className="counter">1</div>               
                     </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon' />
                        <div className="counter">2</div>        
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className='icon'/>
                    </div>

                    <div className="item">
                        <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/shah-rukh-khan-1-2_1200x768.jpeg?b8MYSWfocPIPjDvbI5Wq9R0xh5KT3S3t&size=770:433'alt='hello' className="avatar"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;