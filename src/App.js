import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Search from './Search';
import { Container, Grid, Image } from 'semantic-ui-react';
import DraggableContainer from './DraggableContainer'
import MyResponsiveGrid from './DraggableContainer';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageDetail: [],
      imageObject: [],
      imageUrl: "https://images.unsplash.com/photo-1566157356740-9dfc98ec5830?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjg2OTA3fQ"
    }
  }

  showDetail = (event,image, imageUrl) => {
    console.log(event, image, imageUrl)
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
      < Router >
      < div className = "App" >
        <Grid columns={2} divided>
        
        
            <Grid.Row>
               <Grid.Column>
          <Switch>
            <Route exact path='/' component={Dashboard} />
                  <Route exact path='/search' render={() => <Search imageUrl={this.state.imageUrl} showDetail={this.showDetail}/>} />
          </Switch>
        </Grid.Column>
              <Grid.Column>
              <Grid.Column>
                        draggable interface
                <MyResponsiveGrid image={this.state.imageUrl} imageDetail={this.state.imageDetail}/>
              </Grid.Column>
                  <Grid.Column>
                      <Container><h1 style={{ textAlign: "center" }}>Selected</h1>
                        {this.state.imageDetail.map(image => { return(
                          <Image src={image.urls.regular} alt="image being focused #add prop detail for production"></Image>
                          )
                        })}
                    </Container>
                  </Grid.Column>
          </Grid.Column>
        </Grid.Row>
      
    </Grid>
        </div>
        </Router>
    );
  }

}

export default App;
