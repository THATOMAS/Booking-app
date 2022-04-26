import React from 'react'

const CursorBox = ()=>{
    return(<>
    
        <div className="cursor-Box" 
        style={{background:'rgba(118, 31, 224,0.5)',
        gridArea: '3 / 1 / span 1 / span 2',
        width:'100vw',
        height:'20vh'
        }}>
      <h3>Cursor goes here</h3>
        </div>
    </>)
}

export default CursorBox;