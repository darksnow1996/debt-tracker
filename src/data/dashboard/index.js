import store from "../../redux/store"
import api from "../api"



class dashboardService{

async dashboardData(){
    try{
        let response = await api.get('/dashboard',this.setTokenConfig());

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


export default new dashboardService();