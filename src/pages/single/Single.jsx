import React from 'react';
import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

const Single = ()=>{
    return(
        <div className='single'>
           <Sidebar />
           <div className="singleContainer">
            <Navbar />
            <div className="top">
                <div className="left">
                    <div className="editButton">Edit</div>
                    <h1 className='title'>Information</h1>
                    <div className="item">
                        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/shah-rukh-khan-1-2_1200x768.jpeg?b8MYSWfocPIPjDvbI5Wq9R0xh5KT3S3t&size=770:433" alt="Hello" className="itemImg" />
                    <div className="details">
                        <h1 className="itemTitle">
                            Sandeep Shrivastava
                        </h1>
                        <div className="detailItem">
                            <span className="itemKey">
                                Email: 
                            </span>
                            <span className="itemValue">shrivastavasandeep13@gmail.com</span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">
                                Phone: 
                            </span>
                            <span className="itemValue">+91-9713731239</span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">
                                Address: 
                            </span>
                            <span className="itemValue">H.no 05, Bhawani campus phase 2, Bhopal MP 462041</span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">
                                Country: 
                            </span>
                            <span className="itemValue">India</span>
                        </div>
                    </div>
                    </div>
                    
                    
                </div>
                <div className="right">
                    <Chart aspect={3 / 1} title={"User Spending (Last 6 Months)"}/>
                </div>
            </div>
            <div className="bottomView">
                <Table title={"Last Transactions"}/>
            </div>
           </div>
        </div>
    )
}

export default Single;