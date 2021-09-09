
import { useRouteMatch,Link,Switch, Route } from "react-router-dom"
import AddLoanee from "./AddLoanee"
import LoanRecords from "./LoanRecords"


const Loanees = (props) => {

    let {path,url} = useRouteMatch()
    return (
       

        <Switch>
        <Route path={path} exact>
        <LoanRecords/>
        </Route>
        <Route path={`${path}/create`}>
        <AddLoanee/>
        </Route>
    </Switch>
    )
}

export default Loanees