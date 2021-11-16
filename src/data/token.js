import store from "../redux/store"


function setTokenConfig(){
    const {token} = store.getState().auth
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
  
        return config
    }
  
  


    export default setTokenConfig