import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Search from './Search';
import { Container, Grid, Image } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageDetail: [],
      imageUrl: ""

    }
  }

  showDetail = (event,image, imageUrl) => {
    console.log(event, image, imageUrl)
  }

  render() {
    return (
      < div className = "App" >
        <Grid columns={2} divided>
        
        <Router>
            <Grid.Row>
               <Grid.Column>
          <Switch>
            <Route exact path='/' component={Dashboard} />
                  <Route exact path='/search' render={() => <Search showDetail={this.showDetail}/>} />
          </Switch>
        </Grid.Column>
            <Grid.Column>
                <Container><h1 style={{ textAlign: "center" }}>App component</h1>
                  <Image src={this.state.imageUrl} alt="image being focused #add prop detail for production"></Image>
                </Container>
            </Grid.Column>
          </Grid.Row>
        </Router>
        </Grid>
         </div>
    );
  }

}

export default App;
