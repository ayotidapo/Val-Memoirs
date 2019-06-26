import 'whatwg-fetch'
import axios from 'axios'
const GET_IMAGES = "app/GET_IMAGES"

const initialImages = {
    results: []
}


export function slideImages(state = initialImages, action) {
    switch (action.type) {
        case GET_IMAGES:
            return {
                results: [...action.results]
            }

        default:
            return state
    }
}

//
//
// export function callgetImages() {
//     return dispatch => {
//         fetch('https://api.unsplash.com/photos?page=1&query=valentines', {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
//             }
//         }).then(response => {
//             response.json()
//             console.log(response)
//         }).then(response => {
//             console.log(response)
//             // const results = data.results
//             // dispatch(getImages(results))
//         })
//     }
// }


export function callgetImages() {
    return async function (dispatch, getState) {
        try {

            const response = await axios.get(`https://api.unsplash.com/photos?page=1&query=valentines?client_id=9bddc85934c46fa68f4bd3b8c4aec516f699fb3433af073f3220291f92dd3ef6`);
            //dispatch(getImages(response.data));
            console.log(response.data)
        } catch (e) {
            // dispatch({ type: FAIL_USERS, error: e });
            console.log("Error!", e);
        }
    };
}


export function getImages(results) {
    return {
        type: GET_IMAGES,
        results
    }
}
