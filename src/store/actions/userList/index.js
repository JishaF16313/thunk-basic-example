import axios from "axios";

export const TYPES={
    USER_LISTING:"USER_LISTING"
}
export const userListing=()=>{
    return (dispatch)=>{
        try{
          // axios.get('https://jsonplaceholder.typicode.com/users')
           //.then(res=>onSuccess(res.data))
           fetch('https://jsonplaceholder.typicode.com/users')
           .then(res=>res.json())
           .then(data=>onSuccess(data))
        }
        catch(error){return error;}

        function onSuccess(list)
        {
            dispatch({type:TYPES.USER_LISTING,payload:list})
        }
    }
}

