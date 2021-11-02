import {combineReducers} from "redux"

import * as actions from "./actions"

const merge = (prev, next) => Object.assign({}, prev, next)
const initialState = {
    isAuthenticated:false,
    loading:false,
    loginErr : '',
    token:null,
    user:{}

}

const authReducer = (state=initialState, action) => {
    if(action.type === actions.USER_LOGGED_IN){
       // console.log(action.payload)
        return merge(state,{
            user:action.payload.user,
             isAuthenticated:true ,
             loading:false,
             token:action.payload.token })
    }
    else if(action.type ===  actions.USER_LOG_IN_REJECTED){
        return merge(state, {loginErr: action.payload, loading:false})
    }
    else if(action.type === actions.USER_LOGGED_OUT){
        return merge(state, {isAuthenticated:false, user:{},token:null, loginErr:""})
    }
    else if(action.type === actions.USER_SESSION_EXPIRED){
        return merge(state, {isAuthenticated:false, user:{},token:null, loginErr: ''})
    }
    else if(action.type === actions.LOGIN_SENT){
        return merge(state, {loading:true})
    }

    return state;
}



// const userReducer = (state = {}, action) => {
//   switch (action.type) {
//     case UPDATE_USER:
//       return merge(state, action.payload)
    
//     case LOG_IN_FULFILLED:
//       return merge(state, {token: action.payload})
//     case LOG_IN_REJECTED:
//       return merge(state, {loginErr: action.payload})
//     default:
//       return state
//   }
// }

const reducer = combineReducers({
  auth: authReducer,
  
})

export default reducer