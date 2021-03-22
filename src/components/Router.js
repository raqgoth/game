import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Caregivers from '../pages/Caregivers'
import Contact from '../pages/Contact'
import Project from '../pages/Project'
import Students from '../pages/Students'

const Routes = () => {
    return (
        <div>
            <Switch>
                  <Route exact path = "/" component={Home}/>
                  <Route exact path = "/about" component = {About} />
                  <Route exact path = "/Project" component = {Project} />
                  <Route exact path = "/contact" component = {Contact}/>
                  <Route exact path = "/caregivers" component = {Caregivers} />
                  <Route exact path = "/students" component = {Students} />
                  
            </Switch>

           
                  
        </div>
    )

}
export default Routes