import React,{useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import "./new.scss"
import { DriveFolderUploadOutlined } from '@mui/icons-material';
const New = ({inputs,title})=>{
    const [file,setFile]=useState("")
    console.log(file);
    return(
        <div className='new'>
         <Sidebar />
         <div className="newContainer">
            <Navbar />
            <div className="top">
                <h1>{title}</h1>
            </div>
            <div className="bottom">
                <div className="left">
                    <img src={!!file?URL.createObjectURL(file):"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="" style={{
                    width:100,
                    height:100,
                    borderRadius: "50%",
                    objectFit: "cover"
                }} />
                </div>
                <div className="right">
                    <form>
                        <div className='formInput'>

                        <label htmlFor='file'>
                            Image:<DriveFolderUploadOutlined className='icon' style={{cursor:'pointer'}}/>
                            <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:'none'}} />
                        </label>
                        </div>
                
                        {inputs.map((input)=>(
                            <div className="formInput" key={input.id}>
                                <label >
                                    {input.label}
                                </label>
                                <input type={input.type} placeholder={input.placeholder} />

                            </div>
                        ))}
                        <button>Send</button>
                    </form>
                </div>
            </div>
         </div>
        </div>
    )
}

export default New;