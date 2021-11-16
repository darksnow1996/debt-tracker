import DashBoard from "../../Dashboard"
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from "../../../components/Table"
import React  from "react"
import { Button, ButtonLink, ButtonSm } from "../../../components/Button"
import Modal from "../../../components/Modal"
import { useState, useEffect} from "react"
import Input from "../../../components/Input"
import Label from "../../../components/Label"
import {useForm,FormProvider} from "react-hook-form"
import debtorService from "../../../data/debtors"
import loanService from "../../../data/loans"
import {useToasts} from 'react-toast-notifications'
import Select from "../../../components/Select"
import numberFormatter from "../../../helper/numberformatter"






const LoanRecords = (props) => {

  const {register, handleSubmit,reset, watch, formState: { errors }} = useForm();
  const {addToast} = useToasts()
  const[loanData, setLoanData] = useState([]);
  const [debtorData, setDebtorData] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [formisLoading, setFormIsLoading] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)



  useEffect(()=>{
    let getDebtors = async()=>{
      try{
       let {data} = await debtorService.getDebtors()      
     // console.log(data)
      data = data.map((debtor)=> {
        return {
          id: debtor.id,
          value: debtor.name
        }
      })
     // console.log(data)
       setDebtorData(data)  
      }
      catch(error){

      }
    
    }  
    getDebtors()  
  },[])


  useEffect(()=>{
    let getLoans = async()=>{
      try{
       let {data} = await loanService.getLoans()      
     // console.log(data)
       setLoanData(data)  
      }
      catch(error){

      }
    
    }  
    getLoans()  
  },[refreshKey])


    const columns = React.useMemo(() => [
        {
          Header: "Debtor",
          accessor: 'loanee.name',
          Cell : ({value})=> {
            return value ? value.replace(/\S+/g, value => value.charAt(0).toUpperCase() + value.substr(1).toLowerCase()): value},
         
        },
        {
          Header: "Amount Owed",
          accessor: 'amount',
          Cell: ({value})=> numberFormatter(value)
        },
        {
          Header: "Amount Paid",
          accessor: 'total_amount_paid',
          Cell: ({value})=> numberFormatter(value)
        },
        {
          Header: "Status",
          accessor: 'status',
          Cell: StatusPill
         
        },
        
        {
            Header: "Action",
           
            
           
          },
      ], [])
    
    //  const data = React.useMemo(() => getData(), [])

  
   const handleFormSubmit = async(data)=> {
    try{
      console.log(data)
      setFormIsLoading(true)
      let loan = await loanService.createLoan(data)
      setFormIsLoading(false)
      addToast(loan.message, {appearance:"success"})     
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
        <Modal title="Add Loan" showModal={showModal} setShowModal={setShowModal}>
            <form className="grid grid-cols-4 gap-4" onSubmit={handleSubmit(handleFormSubmit,onFormError)}>
                <div className="col-span-4">
                <Label title="Choose Debtor"/>
                <Select 
                register={register} 
                rules={{
                required: true,

              }} 
                options={debtorData} 
                name="loanee_id" 
               
                placeholder="Enter Debtor Name"/>
                </div>
                <div className="col-span-4">
                <Label title="Loan amount"/>
                <Input 
                 rules={{
                required: true,

              }} 
                type="number" 
                register={register} 
                
                label="amount" 
                placeholder=""/>

                </div>
                <div className="col-span-4">
                <Label title="Date Collected"/>
                <Input 
                 rules={{
                required: true,

              }} 
                register={register} 
                
                label="date_collected" 
                type="date" 
                placeholder=""/>
                </div>
                <div className="col-span-4">
                <Label title="Due Date"/>
               <Input 
                register={register} 
                rules={{
                required: true,

              }}                
                 
                label="payback_date" 
                type="date" 
                placeholder=""/>

                </div>
                <div className="col-span-4 ">
                    <ButtonSm disabled={formisLoading ? 'disabled': ''}
                    title={formisLoading ? "...." : "save"} type="submit"/>
                    <ButtonSm type="button" onClick={()=> {
                setShowModal(false)
            }} title="Close" ></ButtonSm>
                </div>
            </form>
        </Modal>
            
            <section class="my-auto mt-10 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <div className="w-full flex flex-row justify-between">
            <h5 class="text-gray-900 text-2xl font-bold mt-0 mb-0">Loans</h5>
            <div className=" max-w-md">
            <ButtonSm onClick={()=> {
                setShowModal(true)
            }} title="Add Loan" ></ButtonSm>
            </div>
            </div>
            
            
            <Table columns={columns} data={loanData} />
                 </section>
            
                
            
                    </DashBoard>

      
    )
}

export default LoanRecords