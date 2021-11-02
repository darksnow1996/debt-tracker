import { useToasts } from "react-toast-notifications"; 



const ShowAlert = (message,type)=> {
    const {addToast} = useToasts();
    addToast(message, {appearance:type})
}


export default ShowAlert