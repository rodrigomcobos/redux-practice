//Step One: Setting up initial state, function with state = initialState and action with a switch statement
import axios from 'axios';

//Setting up initial state as an empty array with loading as false
const initialState = {
  loading: false,
  articles: [],
};

//Step Four: Setting up action types
const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const PENDING = 'PENDING';

//Creating async function (thunk) that takes dispatch as an argument
export const requestArticles = async (dispatch) => {
  dispatch({ type: PENDING });
  let articles = await axios.get('/api/hacker-news').then((res) => res.data);
  dispatch({ type: REQUEST_ARTICLES, payload: articles });
};

export default function hackerNewsReducer(state = initialState, action) {
  switch (action.type) {
    case PENDING: //Pending action
      return {
        ...state,
        loading: true,
      };

    case REQUEST_ARTICLES: //Request articles action
      return {
        loading: false,
        article: action.payload,
      };

    default:
      return state;
  }
}
