import React, { Component } from 'react';
import { Grid, Image, Input, Form, Button, Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {unsplashRequest} from './services/requests'

class Search extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //unsplashRequest is a namedimport from services/requests
        unsplashRequest().then(json => {
            this.props.dispatch({type: 'FETCHPHOTOS', payload: json.results})
        }).then(this.splitCollectionForGrid)
    }

    splitCollectionForGrid = () => {
        let halfWayThrough = Math.floor(this.props.images.photos.length / 2)
        let arrayFirstHalf = this.props.images.photos.slice(0, halfWayThrough);
        let arraySecondHalf = this.props.images.photos.slice(halfWayThrough, this.props.images.photos.length);
        this.props.dispatch({type: 'SETIMAGECONTAINERONE', payload: arrayFirstHalf})
        this.props.dispatch({type: 'SETIMAGECONTAINERTWO', payload: arraySecondHalf})
        // this.setState({ first: arrayFirstHalf, second: arraySecondHalf})
    }

    onSearchChange = (event) => {
        event.preventDefault()
        unsplashRequest(event.target.searchTerm.value, 1, 15)
            .then(json => {
                this.props.dispatch({
                    type: 'FETCHPHOTOS',
                    payload: json.results
                })
            }).then(this.splitCollectionForGrid)
    }

    render() {
        // let selection = this.state.photos.filter(photo => Number(photo.height) > Number(photo.width))
        return (<div>
            
                <Form className="form" onSubmit={this.onSearchChange} >
                   {/* <Container> */}
                    <Input
                        fluid
                        name="searchTerm"
                        icon='search'
                        placeholder="Search Term"
                        // style={{'width' : "31rem"}}
                    />
                <Button
                            id='addButton'
                            fluid
                            style={{ 'marginTop': '6px', 'marginBottom': '8px'}}
                            type='submit'
                        > 
                            Search
                        </Button>
                   {/* </Container> */}
                    </Form>
            
        
            <Grid columns={2} divided>
                <Grid.Row>
                <Grid.Column>
                <Grid container columns={1}>
                    {this.props.images.imageContainerOne.map(photo => 
                        <Grid.Column key={Math.random()}>
                            <Container>
                                <Image
                                    onClick={(e) => this.props.showDetail(e, photo, photo.urls.regular)}
                                    src={photo.urls.regular} fluid />
                                Photo by <a href={`https://unsplash.com/@${photo.user.username}?utm_source=your_app_name&utm_medium=referral`}>{photo.user.first_name + ' ' + photo.user.last_name}</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>
                            </Container>
                    </Grid.Column>)}
                    </Grid>

                    </Grid.Column>
                    
                    <Grid.Column>
                        <Grid columns={1}>
                            
                                {this.props.images.imageContainerTwo.map(photo => 
                                < Grid.Column key = {
                                    Math.random()
                                } >
                            <       Container>
                                        <Image
                                            src={photo.urls.regular} fluid
                                            onClick={(e) => this.props.showDetail(e, photo, photo.urls.regular)}
                                            />
                                        Photo by <a href={`https://unsplash.com/@${photo.user.username}?utm_source=your_app_name&utm_medium=referral`}>{photo.user.first_name + ' ' + photo.user.last_name}</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>

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

//imports state from store and maps them to components props
const mapStateToProps = (state) => {
    return {
        // count: state.count,
        // photos: state.photos,
        // imageUrl: state.imageUrl,
        // imageContainerOne: state.imageContainerOne,
        // imageContainerTwo: state.imageContainerTwo
        images: state.images
    }
}

export default connect(mapStateToProps)(Search)




