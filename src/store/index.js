import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { usersApi } from "./apis/usersApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumApi";
import { photoApi } from "./apis/photoApi";

export const store=configureStore({
    reducer:{
        [usersApi.reducerPath]:usersApi.reducer,
        [albumsApi.reducerPath]:albumsApi.reducer,
        [photoApi.reducerPath]:photoApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(usersApi.middleware).concat(albumsApi.middleware).concat(photoApi.middleware)
    }
})
setupListeners(store.dispatch)
export {useFetchUsersQuery,useAddUserMutation,useRemoveUserMutation} from "../store/apis/usersApi"
export {useFetchAlbumsQuery,useAddAlbumMutation,useRemoveAlbumMutation} from "../store/apis/albumApi"
export {useFetchPhotoQuery,useAddPhotoMutation,useRemovePhotoMutation} from "../store/apis/photoApi"