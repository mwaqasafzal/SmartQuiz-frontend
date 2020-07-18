import React from 'react'
const Backdrop=({backdropCloseHandler})=>{
    
    return(
        <div className="backdrop" onClick={backdropCloseHandler}>

        </div>
    );
}

export default Backdrop;