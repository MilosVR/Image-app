import axios from "axios";
export const FETCH_IMAGES = "FETCH_IMAGES";
export const SEARCH_IMAGES = "SEARCH_IMAGES";
export const LARGEST_IMAGES = "LARGEST_IMAGES";
export const SMALLEST_IMAGES = "SMALLEST_IMAGES";

export const fetchImages = () => dispatch => {
  axios
    .get("https://picsum.photos/v2/list?page=2&limit=6")
    .then(res => {
      dispatch({
        type: FETCH_IMAGES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};
export const searchImages = term => dispatch => {
  axios
    .get("https://picsum.photos/v2/list?page=2&limit=6")
    .then(res => {
      dispatch({
        type: SEARCH_IMAGES,
        payload: { term, data: res.data }
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};
export const largestImages = () => dispatch => {
  axios
    .get("https://picsum.photos/v2/list?page=2&limit=6")
    .then(res => {
      dispatch({
        type: LARGEST_IMAGES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};
export const smallestImages = () => dispatch => {
  axios
    .get("https://picsum.photos/v2/list?page=2&limit=6")
    .then(res => {
      dispatch({
        type: SMALLEST_IMAGES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};
