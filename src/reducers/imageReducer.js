import {
  FETCH_IMAGES,
  SEARCH_IMAGES,
  SMALLEST_IMAGES,
  LARGEST_IMAGES
} from "../actions/imageActions";

const initialState = {
  images: [],
  loading: true
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        images: action.payload,
        loading: false
      };
    case SEARCH_IMAGES:
      return {
        ...state,
        images: action.payload.data.filter(item => {
          return item.author
            .toLowerCase()
            .includes(action.payload.term.toLowerCase());
        }),
        loading: false
      };
    case LARGEST_IMAGES:
      return {
        ...state,
        images: action.payload.sort((a, b) => {
          if (
            parseInt(a.width) + parseInt(a.height) <
            parseInt(b.width) + parseInt(b.height)
          )
            return 1;
          if (
            parseInt(a.width) + parseInt(a.height) >
            parseInt(b.width) + parseInt(b.height)
          )
            return -1;
          return 0;
        })
      };
    case SMALLEST_IMAGES:
      return {
        ...state,
        images: action.payload.sort((a, b) => {
          if (
            parseInt(b.width) + parseInt(b.height) <
            parseInt(a.width) + parseInt(a.height)
          )
            return 1;
          if (
            parseInt(b.width) + parseInt(b.height) >
            parseInt(a.width) + parseInt(a.height)
          )
            return -1;
          return 0;
        })
      };
    default:
      return state;
  }
};

export default imageReducer;
