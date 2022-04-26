import React from 'react'

const PhotoBox = ()=>{
    return(
        <><div className="photo-Box" 
        style={{background:'rgba(138, 166, 28,0.6)',
        gridArea: '2 / 2 / span 1 / span 1',
        width:'50vw',
        height:'60vh'
        
        }}>
          <h3>Photo goes here</h3>
        </div>
        </>
    )
}
export default PhotoBox