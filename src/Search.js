import React, { Component } from 'react';
import Unsplash from 'unsplash-js';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: [],
            photoUrls: []
        }
    }

    componentDidMount() {
         let unsplash = new Unsplash({
             applicationId: process.env.REACT_APP_ACCESS_KEY,
             secret: process.env.REACT_APP_SECRET
         });
         unsplash.photos.listPhotos(2, 5, "latest")
             .then(data => data.json())
             .then(json => {
                 this.setState({
                     photos: json
                 })
             })
         
    }

    render() {
        console.log(Carousel.props)
        return (
            <div className="Search container grid">
                <Carousel  className="row">
                    {this.state.photos.map(photo => {
                        return (
                            < Carousel.Item key={photo.id} >
                                <img 
                                    className="d-block w-100 "
                                    src={`${photo.urls.small}`}
                                    alt={photo.id}
                                />
                                <Carousel.Caption>
                                    <Button>Select</Button>
                                <h3>{photo.Caption}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        )
    }
}

export default Search