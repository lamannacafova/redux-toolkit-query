import React from 'react'
import {useAddAlbumMutation, useFetchAlbumsQuery} from "../store"
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import AlbumListItem from './AlbumListItem';
import CircularProgress from '@mui/material/CircularProgress';
const AlbumList = ({user}) => {
    const {data,isFetching,isError}=useFetchAlbumsQuery(user)
    const [addAlbum,result]=useAddAlbumMutation()
    // console.log(result);
    const handleAlbumAdd=()=>{
        addAlbum(user)
    }
    let content
    if(isFetching){
        content=(
            <Skeleton variant="rectangular" sx={{width:"100%",height:"200px"}}/>
         )
    }
    else if(isError){
      content=<div>Error var</div>
    }
    else{
        content=data.map((album)=>{
            return <AlbumListItem key={album.id} album={album}/>
        })
    }
    return (
       <>
         <div>
            <div className="topArrangement">
                <h3>{user.name} Album</h3>
                <Button variant="outlined" onClick={handleAlbumAdd}>
                  {result.isLoading ? <CircularProgress style={{width:"25px",height:"25px"}}/> : <span>Album add +</span> }
                </Button>
            </div>
            {content}
        </div>
       </>
    )
}

export default AlbumList
