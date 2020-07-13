import React from 'react'
export const Backdrop=({backdropCloseHandler})=>{
    
    return(
        <div className="backdrop" onClick={backdropCloseHandler}>

        </div>
    );
}