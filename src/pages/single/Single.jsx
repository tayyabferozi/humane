import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () =>{
    return(
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
            <Navbar/> 
            <div className="top">
                <div className="left">
                    <div className="editButton">Edit</div>
                    <h1 className="title">User Info</h1>
                    <div className="item">
                        <img src="https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face"
                        alt=""
                        className="itemImg"
                        />
                        <div className="details">
                            <h1 className="itemTitle">Susan Mitchell</h1>
                            <div className="itemDetail">
                                <span className="itemKey">Email:</span>
                                <span className="itemValue">s.mitchell@humanecoaching.com</span>
                                </div>
                                <div className="itemDetail">
                                <span className="itemKey">Phone:</span>
                                <span className="itemValue">678-555-5555</span>
                                </div>
                                <div className="itemDetail">
                                <span className="itemKey">Address:</span>
                                <span className="itemValue">1234 Deck Road. Atlanta, GA 30021</span>
                                </div>
                                <div className="itemDetail">
                                <span className="itemKey">Country:</span>
                                <span className="itemValue">USA</span>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <Chart aspect={3 / 1} title="User Spending (Last 6 Months)"/>
                    </div>
                </div>      
            <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            <List/>              
                </div>
            </div>
       </div>
    
    );

};

export default Single