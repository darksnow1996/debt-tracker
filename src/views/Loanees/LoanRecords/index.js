import DashBoard from "../../Dashboard"
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from "../../../components/Table"
import React, { useEffect }  from "react"
import { Button, ButtonLink, ButtonSm } from "../../../components/Button"
import Modal from "../../../components/Modal"
import { useState } from "react"
import Input from "../../../components/Input"
import {useForm,FormProvider} from "react-hook-form"
import debtorService from "../../../data/debtors"
import {useToasts} from 'react-toast-notifications'
import formatPhoneNumber from "../../../helper/numberformatter/telformatter"



const LoanRecords = (props) => {
  const {register, handleSubmit,reset, watch, formState: { errors }} = useForm();
  const {addToast} = useToasts()
  const[debtorData, setDebtorData] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0)


  useEffect(()=>{
    let getDebtors = async()=>{
      try{
       let {data} = await debtorService.getDebtors()      
      // console.log(data)
       setDebtorData(data)  
      }
      catch(error){

      }
    
    }  
    getDebtors()  
  },[refreshKey])

    const columns = React.useMemo(() => [
        {
          Header: "Debtor Name",
          accessor: 'name',
          Cell : ({value})=> {
            return value ? value.replace(/\S+/g, value => value.charAt(0).toUpperCase() + value.substr(1).toLowerCase()): value;}
         
        },
        {
          Header: "Email",
          accessor: 'email',
          Cell : ({value})=> value
        },
        {
          Header: "Tel",
          accessor: 'tel',
          Cell : ({value})=> formatPhoneNumber(value)
         
        },
        
        {
            Header: "Action",
           
            // Cell : ({ value }) =>(
            // <ButtonLink
            //     title="Edit"
               
            // />) 
           
          },
      ], [])
    
    

   const [showModal, setShowModal] = useState(false)
   const [formisLoading, setFormIsLoading] = useState(false)

   const handleFormSubmit = async(data)=> {
     try{
       setFormIsLoading(true)
       let debtor = await debtorService.createDebtor(data)
       setFormIsLoading(false)
       addToast(debtor.message, {appearance:"success"})      
       setRefreshKey(oldKey=> oldKey + 1) 
       reset() 
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
        <Modal title="Add Debtor" showModal={showModal} setShowModal={setShowModal}>
            <form className="grid grid-cols-4 gap-4" onSubmit={handleSubmit(handleFormSubmit,onFormError)}>
                <div className="col-span-4">
                <Input 
                register={register} 
                type="text"  
                label="name" 
                placeholder="Enter Debtor Name" 
                rules={{
                required: true,

              }} ></Input>
                
                </div>
                <div className="col-span-4">
                <Input 
                register={register} 
                type="email"  
                label="email" 
                placeholder="Email address"
                 rules={{
                required: true,

              }} ></Input>
                

                </div>
                <div className="col-span-4">
                <Input 
                register={register} 
                type="tel" 
                 label="tel" 
                 placeholder="Enter mobile number" 
                 rules={{
                required: true,

              }} ></Input>

            </div>
                <div className="col-start-4">
                    <Button 
                    disabled={formisLoading ? 'disabled': ''}
                    title={formisLoading ? "...." : "save"} 
                    type="submit"/>
                </div>
            </form>
        </Modal>
            
            <section class="my-auto mt-10 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <div className="w-full flex flex-row justify-between">
            <h5 class="text-gray-900 text-2xl font-bold mt-0 mb-0">Debtors</h5>
            <div className="w-auto">
            <ButtonSm onClick={()=> {
                setShowModal(true)
            }} title="Create" ></ButtonSm>
            </div>
            </div>
            
            
            <Table columns={columns} data={debtorData} />
                 </section>
            
                
            
                    </DashBoard>

      
    )
}

export default LoanRecords