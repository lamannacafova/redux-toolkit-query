import React from 'react'
import { useAddPhotoMutation, useFetchPhotoQuery } from '../store'
import Skeleton from '@mui/material/Skeleton';
import PhotoListItem from './PhotoListItem';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
const PhotoList = ({album}) => {
    const {data,isFetching,isError}=useFetchPhotoQuery(album)
    const [addPhoto,results]=useAddPhotoMutation()
    const handlePhotoAdd=()=>{
        addPhoto(album)
    }
     let content
     if(isFetching){
        content=(
            <Skeleton variant="rectangular" sx={{width:"100%",height:"300px"}}/>
         )
     }
     else if(isError){
         content=<div>Error var</div>
     }
     else{
         content=data.map((photo)=>{
             return <PhotoListItem key={photo.id} photo={photo}/>
         })
     }
    return (
        <>
           <div>
               <div className="topArrangement">
               <h3>{album.title} Photos</h3>
                <Button variant="outlined" onClick={handlePhotoAdd}>
                    {results.isLoading ? <CircularProgress/> : <span>Photo add +</span>}
                </Button>
               </div>
               <div className="photoDiv">{content}</div>
           </div>
        </>
    )
}

export default PhotoList
