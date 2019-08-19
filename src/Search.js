import React, { Component } from 'react';
import Unsplash from 'unsplash-js';
import { Grid, Segment, Image, Card, Input, Form, Button } from 'semantic-ui-react'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: [],
            photoUrls: [],
            searchTerm: "flowers"
        }
    }

    componentDidMount() {
         let unsplash = new Unsplash({
             applicationId: process.env.REACT_APP_ACCESS_KEY,
             secret: process.env.REACT_APP_SECRET
         });
        
         unsplash.photos.listPhotos(2, 25, "latest")
             .then(data => data.json())
             .then(json => {
                 this.setState({
                     photos: json
                 })
             })    
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
             })
        
    }

    searchTerm = (event) => {
        // event.preventDefault()
        // this.setState({ searchTerm: event.target.value })
        this.unsplashRequest(event.target.value)
    }

    render() {
        // let selection = this.state.photos.filter(photo => Number(photo.height) > Number(photo.width))
        return (
            <div className="Search">
                <h1 style={{ textAlign: "center" }}>Search Images</h1>
               <Form onSubmit={this.searchTerm}>
                    <Input size='large' name="searchTerm" onChange={this.searchTerm} icon='search' placeholder="Search Term" />
                    <Button type='submit' > Search</Button>
                </Form>
                <Card.Group itemsPerRow={3}>
                    {this.state.photos.map(photo => 
                        <Card key={photo.id} >
                            < Image wrappedui='false' src={photo.urls.small} />
                            Photo by <a href={`https://unsplash.com/@${photo.user.username}?utm_source=your_app_name&utm_medium=referral`}>{photo.user.first_name + ' ' + photo.user.last_name}</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>
                        </Card>
                    )}
                    </Card.Group>
                
            </div>
        )
    }
}

export default Search




