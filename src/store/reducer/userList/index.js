import * as actions from "../../actions/userList";

//initialization
const initValues={
    userdata:[]
}

//function

const userList=(state=initValues,{type,payload})=>{

    switch(type){
        case actions.TYPES.USER_LISTING:
            return({...state,userdata:payload});
        default:
            return state;
    }

}
export default userList;