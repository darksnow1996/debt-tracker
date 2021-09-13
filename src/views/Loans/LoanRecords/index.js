import DashBoard from "../../Dashboard"
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from "../../../components/Table"
import React  from "react"
import { Button, ButtonLink } from "../../../components/Button"
import Modal from "../../../components/Modal"
import { useState } from "react"
import Input from "../../../components/Input"
import Label from "../../../components/Label"



const getData = () => {
    const data = [
      {
        name: 'Jane Cooper',
        email: 'jane.cooper@example.com',
        amount: '$500.90',
        department: 'Optimization',
        tel: "+12738393033933839",
        status: 'Paid',
        role: 'Admin',
        age: 27,
        imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
        name: 'Cody Fisher',
        email: 'cody.fisher@example.com',
        amount: '$310',
        department: 'Intranet',
        tel: "+12738393033933839",
        status: 'Partly Paid',
        role: 'Owner',
        age: 43,
        imgUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
        name: 'Esther Howard',
        email: 'esther.howard@example.com',
        amount: '$204',
        tel: "+12738393033933839",
        department: 'Directives',
        status: 'Paid',
        role: 'Member',
        age: 32,
        imgUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
        name: 'Jenny Wilson',
        email: 'jenny.wilson@example.com',
        amount: '$350',
        tel: "+12738393033933839",
        department: 'Program',
        status: 'Unpaid',
        role: 'Member',
        age: 29,
        imgUrl: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
        name: 'Kristin Watson',
        email: 'kristin.watson@example.com',
        amount: '$50',
        tel: "+12738393033933839",
        department: 'Mobility',
        status: 'Unpaid',
        role: 'Admin',
        age: 36,
        imgUrl: 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
        name: 'Cameron Williamson',
        email: 'cameron.williamson@example.com',
        title: 'Internal Applications Engineer',
        tel: "+12738393033933839",
        department: 'Security',
        status: 'Paid',
        role: 'Member',
        age: 24,
        imgUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
    ]
    return [...data, ...data, ...data]
  }


const LoanRecords = (props) => {

    const columns = React.useMemo(() => [
        {
          Header: "Loanee",
          accessor: 'name',
          Cell: AvatarCell,
          imgAccessor: "imgUrl",
          emailAccessor: "email",
        },
        {
          Header: "Amount",
          accessor: 'amount',
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
    
      const data = React.useMemo(() => getData(), [])

   const [showModal, setShowModal] = useState(false)

    
    return (
      
        <DashBoard>
        <Modal title="Add Loan" showModal={showModal} setShowModal={setShowModal}>
            <form className="grid grid-cols-4 gap-4">
                <div className="col-span-4">
                <Label title="Choose Loanee"/>
                <Input type="text" placeholder="Enter Loanee Name"/>
                </div>
                <div className="col-span-4">
                <Label title="Loan amount"/>
                <Input type="email" placeholder=""/>

                </div>
                <div className="col-span-4">
                <Label title="Loan period"/>
                <Input type="text" placeholder=""/>

                </div>
                <div className="col-start-4">
                    <Button title="Save" type="submit"/>
                </div>
            </form>
        </Modal>
            
            <section class="my-auto mt-10 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <div className="w-full flex flex-row justify-between">
            <h5 class="text-gray-900 text-2xl font-bold mt-0 mb-0">Loans</h5>
            <div className=" max-w-md">
            <Button onClick={()=> {
                setShowModal(true)
            }} title="Add Loan" ></Button>
            </div>
            </div>
            
            
            <Table columns={columns} data={data} />
                 </section>
            
                
            
                    </DashBoard>

      
    )
}

export default LoanRecords