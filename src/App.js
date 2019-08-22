import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from './Dashboard';
import Search from './Search';
import { Container, Grid, Image } from 'semantic-ui-react';
import MyResponsiveGrid from './DraggableContainer';
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageDetail: [],
      imageObject: null,
      imageUrl: ""
    }
  }

  showDetail = (e ,image, imageUrl) => {
    let array = this.state.imageDetail
    array.push(image)
    this.setState({
      imageDetail: array,
      imageUrl: imageUrl,
      imageObject: image
    })
  }
  
  render() {
    return (
      <Router>
        < div className = "App" >
            <Grid columns={2} divided>
            <Grid.Column width={7}>
                  <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route exact path='/search' render={() => <Search imageUrl={this.state.imageUrl} showDetail={this.showDetail}/>} />
                  </Switch>
              </Grid.Column>
              
            <Grid.Column width={9}>
                < Container >
                    {this.state.imageObject != null ? <Image centered size="small" style={{"height": "200px"}} src={this.state.imageObject.urls.regular} bordered alt="image being focused #add prop detail for production"></Image> : null}
                </Container>
                <MyResponsiveGrid image={this.state.imageUrl} imageDetail={this.state.imageDetail} />
              </Grid.Column>
            </Grid>
          </div>
        </Router>
    );
  } 
}
//imports state from store and maps them to components props
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
//old export
// export default App;
//new export with redux store
export default connect(mapStateToProps)(App)