import api from "../api"

 class authService{
 
 
    async register({
    firstname, lastname,email,password,cpassword
}){
    try{
        let response = await api.post("register",{
            firstname,lastname,email,password, password_confirmation:cpassword
        });
      // console.log(response)
        return response.data;
    }
    catch(error){
      //  return error.response.data.message

      let messageArr = [];
      let messages = Object.keys(error.response.data.errors).forEach(key => {
         messageArr.push(error.response.data.errors[key])
        })
      //  console.log(messageArr.join())
        throw new Error(messageArr.join())
    }
 
}


async login({email,password}){
    try{
        let response = await api.post('login', {
            email,password
        });

      // console.log("logging in");
        return response.data
    }
    catch(error){
     // console.log(error.response.data)
        throw new Error(error.response.data.error)
    }
}

async isLoggedIn(){
    try{
        const user = JSON.parse(localStorage.getItem('user'));
        if(user && user.token){
           // console.log("here")
        let response = await api.get("me", {headers: this.authHeader()});

        if(response.data.user){
            return true;
       }
    }
        return false;   
    
    }
    catch(error){
        console.log()
        return false;
       // throw new Error(error.response.data.error)
    }
}

  getCurrentUser(){
    const user = JSON.parse(localStorage.getItem('user'));
    return user? JSON.parse(localStorage.getItem('user')): {token:""};
}

 logout() {
    localStorage.removeItem("user");
  }


 authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.token) {
      return { Authorization: 'Bearer ' + user.token };
    } else {
      return {};
    }
  }

}


export default new authService();