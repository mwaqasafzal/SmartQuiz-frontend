import React,{useContext} from 'react'
export const Backdrop=({backdropCloseHandler})=>{
    
    return(
        <div className="backdrop" onClick={backdropCloseHandler}>

        </div>
    );
}