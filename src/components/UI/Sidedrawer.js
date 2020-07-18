import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import ToggleBtn from './ToggleBtn'
import Backdrop from './Backdrop'

const Sidedrawer = ({options,type})=>{
    const [drawerOpen,setDrawerOpen] = useState(false);

    const toggleDrawer=()=>setDrawerOpen(!drawerOpen);
    const closeSideDrawer=()=>setDrawerOpen(false);
    const drawerStateClass=drawerOpen?"opened-drawer":"closed-drawer";
    return(
        <div className="side-drawer">
            <div style={{display:'flex',alignItems:"center",backgroundColor:"#84a9ac",padding:"5px 0"}}>
                <ToggleBtn toggle={toggleDrawer}/>
                <h5 style={{margin:0,flex:"auto",textAlign:"center"}}>{type}</h5>
            </div>
            <div className={drawerStateClass}>
                <Backdrop backdropCloseHandler={closeSideDrawer}/>
                <ul className="board">
                    {options.map(option=>(
                        <li key={option.to}>
                            <NavLink 
                                activeClassName="dashboard-active" 
                                to={option.to}>
                                {option.name}</NavLink>
                                
                        </li>
                    ))}
                </ul>
            </div>
          
        </div>

    );
}
  

    

export default Sidedrawer;