import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import "./new.scss";

const New = () =>{
    return(
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                <h1>Add New User</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img 
                            src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            alt=""
                            />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none"}} />
                                </div>
                                <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder="johnmy_d" />
                            </div>
                            <div className="formInput">
                                <label>Full Name</label>
                                <input type="text" placeholder="Johnny Dee" />
                                </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="text" placeholder="johnmy_doe@humanecoaching.coom" />
                            </div>

                            <div className="formInput">
                                <label>Phone</label>
                                <input type="text" placeholder="888-989-9090" />
                            </div>

                            <div className="formInput">
                                <label>Password</label>
                                <input type="text" placeholder="password" />
                            </div>

                            <div className="formInput">
                                <label>Address</label>
                                <input type="text" placeholder="12345 Main Street. Atlanta, GA 30021" />
                            </div>

                            <div className="formInput">
                                <label>Country</label>
                                <input type="text" placeholder="USA" />
                            </div>

                            <button>Send</button>

                           
                        </form>
                    </div>
                </div>    
          </div>
          </div>
       
    )

}

export default New