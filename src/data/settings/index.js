import store from "../../redux/store"
import api from "../api"



class settingsService{

async changeDetails(payload){
    try{
        let response = await api.post('settings/profile',payload,this.setTokenConfig());

        return response.data
    }
    catch(error){
        throw new Error(error.message)
    }
   

}

async changePassword(){
    try{
        let response = await api.get('/loanees',this.setTokenConfig());

        return response.data
    }
    catch(error){
        throw new Error(error.message)
    }
   

}


  setTokenConfig(){
    const {token} = store.getState().auth
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

        return config
    }


}


export default new settingsService();