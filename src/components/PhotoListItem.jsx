import React from 'react'
import { useRemovePhotoMutation } from '../store'
import CircularProgress from '@mui/material/CircularProgress';
import { GoTrash } from "react-icons/go";
const PhotoListItem = ({photo}) => {
    const [removePhoto,results]=useRemovePhotoMutation()
    const handleRemovePhoto=()=>{
        removePhoto(photo)
    }
    return (
        <>
            <div style={{margin:"20px", position:"relative"}}>
                <img src={photo.url} alt=""/>
                <div className="deleteDiv" onClick={handleRemovePhoto}>
                 {results.isLoading ? <CircularProgress style={{width:"30px",height:"30px"}}/> :<GoTrash/> }
                </div>
            </div>
        </>
    )
}

export default PhotoListItem
