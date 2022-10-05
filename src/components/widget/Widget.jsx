import React from 'react';
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({type}) =>{
    let data;

    let amount=100;
    let diff=20;

    switch(type){
        case "user":
            data={
                title:'USERS',
                isMoney:false,
                link:"See all users",
                icon : <Person2Icon className='icon' />

            }
            break;
        case 'order':
            data={
                title:'ORDERS',
                isMoney:false,
                link:"View all orders",
                icon : <ShoppingCartOutlinedIcon className='icon' />

            }
            break;
        case 'earnings':
            data={
                title:'EARNINGS',
                isMoney:true,
                link:"View net earnings",
                icon : <AccountBalanceWalletOutlinedIcon className='icon' />

            }
            break;
        case 'balance':
            data={
                title:'BALANCE',
                isMoney:true,
                link:"See details",
                icon : <MonetizationOnOutlinedIcon className='icon' />

            }
            break;
        default:
            break;
    }
    return(
        <div className="widget">
           <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{!!data.isMoney && "$"}{amount}</span>
            <span className='link'>{data.link}</span>

           </div>
           <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
               {diff}
            </div>
           {data.icon}           
         </div>
        </div>
    )
}

export default Widget;