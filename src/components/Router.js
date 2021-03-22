const Routes = () => {
    return (
        <div>
            <Switch>
                  <Route exact path = "/" component={Home}/>
                  <Route exact path = "/about" component = {About} />
                  <Route exact path = "/Project" component = {Project} />
                  <Route exact path = "/contact" component = {Contact}/>
                  
            </Switch>

           
                  
        </div>
    )

}
export default Routes