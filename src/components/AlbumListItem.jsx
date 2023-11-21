import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import PhotoList from './PhotoList'
import { useRemoveAlbumMutation } from '../store'
import CircularProgress from '@mui/material/CircularProgress';
import { GoTrash } from "react-icons/go";

const AlbumListItem = ({album}) => {
    const [removeAlbum,result]=useRemoveAlbumMutation()
    const handleClick=()=>{
        removeAlbum(album)
    }
    const header=(
        <>
        <button style={{marginRight:"30px",border:"none",cursor:"pointer"}} onClick={handleClick}>
            {result.isLoading ? <CircularProgress style={{width:"20px",height:"20px"}}/> :<GoTrash/> }
        </button>
         {album.title}
        </>
    )
    return (
        <>
         <ExpandablePanel header={header}>
            <PhotoList album={album}/>
        </ExpandablePanel> 
        </>
    )
}

export default AlbumListItem
