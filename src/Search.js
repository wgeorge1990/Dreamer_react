import React, { Component } from 'react';
import Unsplash from 'unsplash-js';


class Search extends Component {

    unsplash = new Unsplash({
            applicationId: "{APP_ACCESS_KEY}",
            secret: "{APP_SECRET}"
    });
    
    render() {
        console.log(this.unsplash)
        console.log(process.env.REACT_APP_TEST_SECRET)
        return (
            <div className="Search">
               Search
            </div>
        )
    }
}

export default Search