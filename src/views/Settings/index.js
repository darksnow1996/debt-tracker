
import { useRouteMatch,Link,Switch, Route } from "react-router-dom"

import ChangeName from "./ChangeName"



const Settings = (props) => {

    let {path,url} = useRouteMatch()
    return (
       

        <Switch>
        <Route path={path} exact>
        <ChangeName/>
        </Route>
        
    </Switch>
    )
}

export default Settings




