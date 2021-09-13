
import { useRouteMatch,Link,Switch, Route } from "react-router-dom"
import AddLoan from "./AddLoan"
import LoanRecords from "./LoanRecords"


const Loans = (props) => {

    let {path,url} = useRouteMatch()
    return (
       

        <Switch>
        <Route path={path} exact>
        <LoanRecords/>
        </Route>
        <Route path={`${path}/create`}>
        <AddLoan/>
        </Route>
    </Switch>
    )
}

export default Loans