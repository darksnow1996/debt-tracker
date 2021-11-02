import store from "../../redux/store"
import api from "../api"



class loanService{

async createLoan(payload){
    try{
        let response = await api.post('/loans',payload,this.setTokenConfig());

        return response.data
    }
    catch(error){
        throw new Error(error.message)
    }
   

}

async getLoans(){
    try{
        let response = await api.get('/loans',this.setTokenConfig());

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


export default new loanService();