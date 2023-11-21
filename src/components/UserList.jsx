import React from 'react'
import { useAddUserMutation, useFetchUsersQuery } from '../store'
import Skeleton from '@mui/material/Skeleton';
import UserListItem from './UserListItem';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
const UserList = () => {
    const {data,isFetching,isError}=useFetchUsersQuery()
    const [addUser,results]=useAddUserMutation()
    // debugger
    const handleUserAdd=()=>{
       addUser()
    }

    let content;
    if(isFetching){
        content=(
           <Skeleton variant="rectangular" sx={{width:"100%",height:"700px"}}/>
        )
    }
    else if(isError){
        content=<div>Error var</div>
    }
    else{
      content=data.map((user)=>{
          return <UserListItem key={user.id} user={user} />
      })
    }
   
    return (
        <>
        <div>
            <div className="topArrangement">
                <h1 style={{fontSize:"24px"}}>Kisiler</h1>
                <Button variant="outlined" onClick={handleUserAdd}>
                    {results.isLoading ? <CircularProgress/> : <span>Kisi elave et +</span>}
                </Button>
            </div>
            {content}
        </div>
            
        </>
    )
}

export default UserList
