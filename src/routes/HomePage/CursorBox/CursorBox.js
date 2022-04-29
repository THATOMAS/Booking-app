import React from 'react'
import {BottomCursor} from '../../../SVG'
import './CursorBox.css'
const CursorBox = ()=>{
    return(<>
    
        <div className="cursor-Box" 
        style={{
        gridArea: '3 / 1 / span 1 / span 2',
        width:'100vw',
        height:'20vh'
        }}>
          <div className='bottom-cursor'>
              {BottomCursor()}
          </div>
        </div>
    </>)
}

export default CursorBox;