import store from "../../redux/store"
import api from "../api"



class debtorService{

async createDebtor(payload){
    try{
        let response = await api.post('/loanees',payload,this.setTokenConfig());

        return response.data
    }
    catch(error){
        throw new Error(error.message)
    }
   

}

async getDebtors(){
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


export default new debtorService();