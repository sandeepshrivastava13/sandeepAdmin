import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ViewListIcon from '@mui/icons-material/ViewList';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = ()=>{
    return(
        <div className='sidebar'>
            <div className="top">
                <span className='logo'>
                   DASHBOARD
                </span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>
                            dashboard
                        </span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <AccountCircleIcon  className='icon'/>
                        <span>
                            Users
                        </span>
                    </li>
                    <li>
                        <Inventory2Icon  className='icon' />
                        <span>
                            Products
                        </span>
                    </li>
                    <li>
                        <ViewListIcon  className='icon'/>
                        <span>
                           Orders
                        </span>
                    </li>
                    <li>
                        <LocalShippingIcon  className='icon' />
                        <span>
                           Delivery
                        </span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsIcon  className='icon'/>
                        <span>
                          Stats
                        </span>
                    </li>
                    <li>
                        <NotificationsNoneIcon  className='icon'/>
                        <span>
                           Notifications
                        </span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSuggestIcon  className='icon' />
                        <span>
                          System Health
                        </span>
                    </li>
                    <li>
                        <PsychologyIcon  className='icon'/>
                        <span>
                          Logs
                        </span>
                    </li>
                    <li>
                        <SettingsIcon  className='icon'/>
                        <span>
                          Settings
                        </span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <Person2Icon  className='icon'/>
                        <span>
                          Profile
                        </span>
                    </li>
                    <li>
                        <LogoutIcon  className='icon'/>
                        <span>
                          Logout
                        </span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>

            </div>

        </div>
    )
}

export default Sidebar;