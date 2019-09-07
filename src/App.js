import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Search from './Search';
import { Container, Grid, Image } from 'semantic-ui-react';
import MyResponsiveGrid from './DraggableContainer';
import { connect } from 'react-redux';

class App extends Component {


  showDetail = (e ,image, imageUrl) => {
    this.setState({
      imageUrl: imageUrl
    })
    this.props.dispatch({
      type: 'SETIMAGEURL', payload: imageUrl
    })

  }

  addTen = () => {
    this.props.dispatch({type: 'ADDTEN'})
  }
   
  componentDidMount() {
    this.addTen()
  }

  render() {
    return (
      <Router>
        < div className = "App" >
            <Grid columns={2} divided>
            <Grid.Column width={7}>
                  <Switch>
                    <Route exact path='/' render={(props) => <Search imageUrl={this.props.images.imageUrl} showDetail={this.showDetail}/>} />
                  </Switch>
              </Grid.Column>
            <Grid.Column width={9}>
                < Container >
                    {this.props.images.imageUrl !== "" ? <Image centered size="small" style={{"height": "200px"}} src={this.props.images.imageUrl} bordered alt="image being focused #add prop detail for production"></Image> : null}
                </Container>
                <MyResponsiveGrid image={this.props.images.imageUrl} />
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
    images: state.images
  }
}
//old export
// export default App;
//new export with redux store
export default connect(mapStateToProps)(App)