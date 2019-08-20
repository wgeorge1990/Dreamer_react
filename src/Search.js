import React, { Component } from 'react';
import Unsplash from 'unsplash-js';
import { Grid, Image, Input, Form, Button, Container, Menu } from 'semantic-ui-react'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: [],
            photoUrls: [],
            searchTerm: "mountain",
            first: [],
            second: []
        }
    }

    componentDidMount() {
         let unsplash = new Unsplash({
             applicationId: process.env.REACT_APP_ACCESS_KEY,
             secret: process.env.REACT_APP_SECRET
         });
        
         unsplash.search.photos("mountain", 1, 15)
             .then(data => data.json())
             .then(json => {
                 this.setState({
                     photos: json.results
                 })
             }).then(this.splitCollectionForGrid)
        
    }

    splitCollectionForGrid = () => {
        let photosArray = this.state.photos;
        let halfWayThrough = Math.floor(photosArray.length / 2)
        let arrayFirstHalf = photosArray.slice(0, halfWayThrough);
        let arraySecondHalf = photosArray.slice(halfWayThrough, photosArray.length);
        this.setState({ first: arrayFirstHalf, second: arraySecondHalf})

    }

    unsplashRequest = (searchTerm) => {
         let unsplash = new Unsplash({
             applicationId: process.env.REACT_APP_ACCESS_KEY,
             secret: process.env.REACT_APP_SECRET
         });
        let page = 1
        let perPage = 15
        
         unsplash.search.photos(searchTerm, page, perPage)
             .then(data => data.json())
             .then(json => {
                 console.log(json.results)
                 this.setState({photos: json.results})
             }).then(this.splitCollectionForGrid)
        debugger
        
        
    }

    searchTerm = (event) => {
        // event.preventDefault()
        // this.setState({ searchTerm: event.target.value })
        this.unsplashRequest(event.target.searchTerm.value)

    }

    render() {
        // let selection = this.state.photos.filter(photo => Number(photo.height) > Number(photo.width))
        return (<div>
            
                <Form className="form" onSubmit={this.searchTerm} >
                   {/* <Container> */}
                    <Input
                        fluid
                        name="searchTerm"
                        icon='search'
                        placeholder="Search Term"
                        // style={{'width' : "31rem"}}
                    />
                <Button
                            fluid
                            style={{ 'margin-top': '6px', 'margin-bottom': '8px'}}
                            type='submit'
                        > 
                            Search
                        </Button>
                   {/* </Container> */}
                    </Form>
            
        
            <Grid columns={2} divided>
                <Grid.Row>
                <Grid.Column>
               
                {/* <Card.Group itemsPerRow={3}>
                    {this.state.photos.map(photo => 
                        <Card key={photo.id} >
                            < Image wrappedui='false' src={photo.urls.small} />
                            Photo by <a href={`https://unsplash.com/@${photo.user.username}?utm_source=your_app_name&utm_medium=referral`}>{photo.user.first_name + ' ' + photo.user.last_name}</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>
                        </Card>
                    )}
                    </Card.Group> */}
                <Grid container fluid columns={1}>
                    {this.state.first.map(photo => 
                        <Grid.Column >
                            <Container>
                                <Image
                                    onClick={(e) => this.props.showDetail(e, photo, photo.urls.regular)}
                                    src={photo.urls.regular} fluid />
                            </Container>
                    </Grid.Column>)}
                    </Grid>

                    </Grid.Column>
                    
                    <Grid.Column>
                        <Grid container fluid columns={1}>
                            
                                {this.state.second.map(photo => 
                                <Grid.Column >
                            <       Container>
                                        <Image
                                            src={photo.urls.regular} fluid
                                            onClick={(e) => this.props.showDetail(e, photo, photo.urls.regular)}
                                        />
                                    </Container>
                                    </Grid.Column>)}
                            
                        </Grid>
                    </Grid.Column>
                    </Grid.Row >
            </Grid>
        </div>
                
           
        )
    }
}

export default Search




