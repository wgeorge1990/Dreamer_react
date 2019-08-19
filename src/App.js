import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Search from './Search';
import { Container, Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      < div className = "App" >
      <Grid columns={2} divided>
        <Router>
            <Grid.Row>
               <Grid.Column>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/search' component={Search} />
          </Switch>
        </Grid.Column>
            <Grid.Column>
                <Container><h1 style={{ textAlign: "center" }}>App component</h1></Container>
            </Grid.Column>
          </Grid.Row>
        </Router>
        </Grid>
         </div>
    );
  }

}

export default App;
