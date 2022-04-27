import React from 'react'
import './PageInfo.css'
import Paragraph from './Paragraph'
import NearestStore from './NearestStore'
const PageInfo = () =>{
    return( <>
    
    <div className="page-Info" 
        style={{
        gridArea: '2 / 1 / span 1 / span 1',
        width:'fit-content',
        height:'60vh'
        }}>
        <Paragraph/>
        <NearestStore/>
        </div>
        </>
       )
}

export default PageInfo