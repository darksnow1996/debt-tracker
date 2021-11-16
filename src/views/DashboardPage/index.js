import DashBoard from "../Dashboard";
import { DashboardStatisticCard } from "../Dashboard/DashboardStructure";
import dashboardService from '../../data/dashboard/index'
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";




const DashboardPage = (props) => {
  const {addToast} = useToasts();
 
  const [totalAmountLoaned,setTotalAmountLoaned] = useState(0);  
  const [totalAmountReceived,setTotalAmountReceived] = useState(0);  
  const [lastLoanGiven,setLastLoanGiven] = useState({
    amount:null,
    name:null
  });  
  const [dataLoading, setDataLoading] = useState(false);
  const [highestLoanee, setHighestLoanee] = useState(null);
  const[currentTime, setCurrentTime] = useState("");

 
  useEffect(()=>{
    let today = new Date();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const interval = setInterval(() => {
      const newTime = time;
      setCurrentTime(newTime);
 }, 1000)

 return () => {
     clearInterval(interval);
 }
  },[currentTime])

  useEffect(()=>{
    const getAllData = async()=>{
      setDataLoading(true)
      try{
        let {data} = await dashboardService.dashboardData();
        const {totalAmountLoaned,totalAmountReceived,lastLoanGiven, highestLoanee} = data;
       // console.log(dashboardService.dashboardData())
        setTotalAmountLoaned(totalAmountLoaned)
        setTotalAmountReceived(totalAmountReceived)
        setLastLoanGiven(lastLoanGiven?.amount ? {
          amount: lastLoanGiven?.amount,
          name: lastLoanGiven?.loanee?.name
        }: {amount:null, name:null} );
        setHighestLoanee(highestLoanee?.loanee?.name ? highestLoanee?.loanee?.name:null)
        setDataLoading(false)
        
      }
      catch(error){
        
        addToast(error.message, {appearance:"error"})
        
              }
     
    }

    getAllData()
  },[])

    return (
        <DashBoard>
           <div className="flex space-x-10">
          <DashboardStatisticCard
          icon={<svg version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-pink-600"
	 viewBox="0 0 490.996 490.996">

	<path fill="#db2777" d="M85.8,225.398c11.1,0,20.1,9,20.1,20.1s-9,20.1-20.1,20.1s-20.1-9-20.1-20.1C65.7,234.398,74.7,225.398,85.8,225.398z
		 M33.2,364.098h239.2c-0.8-2.4-1.2-5-1.2-7.7v-20.6H67.3c0.4-2,0.6-4.1,0.6-6.2c0-18.6-15-33.6-33.6-33.6c-2,0-4,0.2-5.9,0.5v-102
		c1.9,0.3,3.9,0.5,5.9,0.5c18.6,0,33.6-15,33.6-33.6c0-2.1-0.2-4.2-0.6-6.2h246.5c-0.7,2.6-1,5.4-1,8.2c0,18.6,15,33.6,33.6,33.6
		c2.9,0,5.7-0.4,8.3-1v34.1c2.5-0.8,5.1-1.3,7.9-1.3h20.5v-68.7c0-18.3-14.9-33.2-33.2-33.2H33.2c-18.3,0-33.2,14.9-33.2,33.2v170.8
		C0.1,349.198,14.9,364.098,33.2,364.098z M354.9,254.098v102.2c0,4.3,3.5,7.7,7.7,7.7h34.2c4.3,0,7.7-3.5,7.7-7.7v-102.2
		c0-4.3-3.5-7.7-7.7-7.7h-34.2C358.3,246.298,354.9,249.798,354.9,254.098z M296.5,281.998c-4.3,0-7.7,3.5-7.7,7.7v66.6
		c0,4.3,3.5,7.7,7.7,7.7h34.2c4.3,0,7.7-3.5,7.7-7.7v-66.6c0-4.3-3.5-7.7-7.7-7.7H296.5z M450.6,143.598c-2.3-3.3-7.2-3.3-9.5,0
		l-39.3,57.4c-2.6,3.8,0.1,9,4.8,9h14.5v146.3c0,4.3,3.5,7.7,7.7,7.7H463c4.3,0,7.7-3.5,7.7-7.7v-146.3h14.5c4.6,0,7.4-5.2,4.8-9
		L450.6,143.598z M191.6,172.798c40.1,0,72.7,32.6,72.7,72.7s-32.6,72.7-72.7,72.7s-72.7-32.6-72.7-72.7
		S151.5,172.798,191.6,172.798z M214.7,215.198l-32.5,32.3l-13.6-13.7l-14.2,14.1l13.6,13.7l14.1,14.2l14.2-14.1l32.5-32.3
		L214.7,215.198z"/>

</svg>}
        title="Total Amount Loaned"
        value={ !dataLoading ? `$${totalAmountLoaned}`:"....."}

          ></DashboardStatisticCard>

<DashboardStatisticCard
          icon={  <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>}
        title="Last Loan Given"
        value={!dataLoading && lastLoanGiven?.amount  ? `$${lastLoanGiven?.amount} to ${lastLoanGiven?.name}`:"...."}

          ></DashboardStatisticCard>

<DashboardStatisticCard
          icon={<svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-pink-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>}
        title="Highest Loan Collector"
        value={!dataLoading ? `${highestLoanee ? highestLoanee:"No data"}`:"...."}

          ></DashboardStatisticCard>


<DashboardStatisticCard
          icon={ <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-pink-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clip-rule="evenodd"
                />
              </svg>}
        title="Total paid back"
        value={!dataLoading ? `$${totalAmountReceived}`:"...."}

          ></DashboardStatisticCard>
        
         
        </div>
        <div className="flex flex-row mt-10 space-x-10 w-full">
          <div className="flex flex-col bg-white w-4/6  lg:w-4/6 p-8  items-center justify-around rounded-xl shadow-lg">
            <div className="space-y-2">
            <blockquote className="relative p-4 text-xl italic border-l-4 bg-neutral-100 text-gray-600 border-neutral-500 quote">

 <p className="mb-4">"Let us lend cheerfully, for the time is pretty sure to come when we will wish to borrow."</p>
 
  <cite>
    -
   <a className="text-sm  text-pink-500" href="#">

     James Ellis
    </a>
  </cite>
</blockquote>
            </div>
           
          </div>
          <div className="flex flex-col w-2/6  lg:w-2/6 items-center justify-center bg-white rounded-xl shadow-lg ">
            <p className="text-lg">The time is now</p>
            <h1 className="text-pink-600 text-3xl">{currentTime}</h1>
          </div>
        </div>
      


        </DashBoard>
    )
}

export default DashboardPage