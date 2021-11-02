import authService from "../data/authentication/index"

const {login,register,logout} = authService;
// action types
export const REGISTERED_USER = "REGISTERED_USER"
export const UPDATED_USER = "UPDATED_USER"
export const USER_LOGGED_IN = "USER_LOGGED_IN"
export const USER_LOGGED_OUT = "USER_LOGGED_OUT"
export const USER_LOG_IN_REJECTED = "USER_LOG_IN_REJECTED"
export const USER_REGISTERED ="USER_REGISTERED"
export const USER_REGISTRATION_REJECTED = "USER_REGISTRATION_REJECTED"
export const USER_SESSION_EXPIRED = "USER_SESSION_EXPIRED"
export const LOGIN_SENT = "LOGIN_SENT"


export const loginUser = (payload) => async(dispatch) => {
    dispatch({
        type:LOGIN_SENT,
    })    
    try{
        const data = await login({email:payload.email, password:payload.password})
       // console.log(data);
        dispatch({
            type: USER_LOGGED_IN,
            payload : data
        })

    }
    catch(error){
      //  console.log(error.message)
        dispatch({
            type:USER_LOG_IN_REJECTED,
            payload: error.message
        })
        throw new Error(error.message)
    }
    
}

export const logoutUser = ()=> {
    try{
        //logout()
        return {
            type:USER_LOGGED_OUT,
            
        }

    }
    catch(error){


    }
    
    
}

export const userSessionExpired = ()=>{
    return {
        type: USER_SESSION_EXPIRED
    }
}

// export const registerUser = (payload) => async(dispatch)=>{
//     try{
//         const data = await register(payload)
//         dispatch({
//             type: USER_REGISTERED,
//             payload:data.message,
//         });
//     }
//     catch(error){
//         dispatch({
//             type:USER_REGISTRATION_REJECTED,
//             payload: error.message
//         })
//     }
    
// }
// action creators

// async action creator
// export const logInUser = (username, password) => async dispatch => {
//   dispatch({type: LOG_IN_SENT})
//   try {
//     //const token = await login(username, password)
//     const token = ""
//     dispatch({type: LOG_IN_FULFILLED, payload: token})
//   } catch (err) {
//     dispatch({type: LOG_IN_REJECTED, payload: err.message})
//   }
// }