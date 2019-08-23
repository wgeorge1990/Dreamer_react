import Unsplash from 'unsplash-js'
 
export function unsplashRequest(searchTerm = 'mountain', page=1, perpage=15) {
   
    let unsplash = new Unsplash({
        applicationId: process.env.REACT_APP_ACCESS_KEY,
        secret: process.env.REACT_APP_SECRET
    });
    return (
    unsplash.search.photos(searchTerm, page, perpage)
        .then(data => data.json()) )
    //at this point it is just returning a promise
}


 