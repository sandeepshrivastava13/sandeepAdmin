import './featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
    return(
        <div className='featured'>
           <div className="top">
            <h1 className='title'>Total Revenue</h1>
            <MoreVertOutlinedIcon />
           </div>
           <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className='title'>Total sales made today</p>
            <p className='amount'>$432</p>
            <p className='desc'>last payment may not be included</p>
           </div>
        </div> 
    )
}

export default Featured;