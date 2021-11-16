import {Button} from "../../../components/Button"
import Input from "../../../components/Input"
import Label from "../../../components/Label"
import DashBoard from "../../Dashboard";
import {useForm,FormProvider} from "react-hook-form"
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
//import settingsService from "../../../data/settings"
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../redux/actions";


const ChangeName = ()=>{

    const {register, handleSubmit,reset, watch, formState: { errors }} = useForm();
  const {addToast} = useToasts()
  const[loanData, setLoanData] = useState([]);
  const [debtorData, setDebtorData] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [formisLoading, setFormIsLoading] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)
  const dispatch = useDispatch();
  
  const {firstname,lastname} = useSelector((state)=>state.auth.user)
//   const [firstname, setFirstName] = useState(firstnamestate)
//   const [lastname, setLastName] = useState(lastnamestate)


//  useEffect(()=>{
    
//      setFirstName(firstnamestate)
//      setLastName(lastnamestate)
//  },[])
  
 // console.log(firstname)

  const formSubmit = async(data)=>{
    try{
        setFormIsLoading(true)
       await dispatch(updateProfile(data))
        setFormIsLoading(false)
        addToast("Profile updated successfully", {appearance:"success"})
       // addToast(response.message, {appearance:"success"})     
        //setRefreshKey(oldKey=> oldKey + 1) 
       // reset() 
      }
      catch(error){
       addToast(error.message, {appearance:"error"})  
       setFormIsLoading(false)
      }

  }

  const onFormError = (error)=> {
    addToast("Validation error", {appearance:"error"})  
  }


    return (
        
       <DashBoard>
        <section class="my-auto mt-10 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <div className="w-full flex flex-row justify-between">
            <h5 class="text-gray-900 text-2xl font-bold mt-0 mb-0">Settings</h5>
            <div className="w-1/12 ">
           
            </div>
            </div>
            
            
            <form onSubmit={handleSubmit(formSubmit,onFormError)}>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <Label title="First Name"></Label>
                <Input rules={{
                required: true,

              }} 
              defaultValue={firstname}
              label="firstname"                
                register={register}  type="text"  />
              </div>

              <div>
                <Label title="Last Name"></Label>
                <Input rules={{
                required: true,

              }} 
              defaultValue={lastname}
               label="lastname"
                register={register}  type="text"  />
              </div>

             
            </div>

            <div class="flex justify-end mt-6">
              <Button disabled={formisLoading ? 'disabled': ''}
                    title={formisLoading ? "...." : "save"}  type="submit" />
            </div>
          </form>
                 </section>
            
       </DashBoard>
    )
}

export default ChangeName;