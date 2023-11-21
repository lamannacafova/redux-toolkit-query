import React, { useState } from 'react'
import {GoChevronDown, GoChevronLeft } from "react-icons/go";
const ExpandablePanel = ({header,children}) => {
    const [expanded,setExpanded]=useState(false)
    const handleClick=()=>{
         setExpanded(!expanded)
    }
    return (
        <>
         <div className="panelDiv">
             <div className="topArrangement">
                 <div>{header}</div>
                 <div onClick={handleClick}>
                  {expanded ? <GoChevronDown/> : <GoChevronLeft/>}   
                 </div>

             </div>
                 {expanded && <div>{children}</div>}
        </div>
        </>
       
    )
}

export default ExpandablePanel
