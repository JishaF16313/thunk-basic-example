import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import {userListing} from "../../store/actions/userList/index";

const UserListing=()=>{
const dispatch=useDispatch();
useEffect(()=>{
    dispatch(userListing())
},[dispatch])

const storeData=useSelector((store)=>{
return{
    userData:store.userList
}
})
const allUser=storeData.userData.userdata;
//console.log(allUser);
    return(
<ul>
    {allUser.map((u,i)=>{
        return(
<li key={i.id}>{u.name}</li>
        )
    })}
</ul>
    )
}

export default UserListing;