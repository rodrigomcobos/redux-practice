import axios from 'axios';

//Always start with initial state then step up function with state = initialState and action as its boilerplate
const initialState = {
  loading: true,
  articles: [],
};

const PENDING = 'PENDING';
const REQUEST_ARTICLES = 'REQUEST_ARTICLES';

//creating async function (thunk) that takes dispatch as an argument
export const requestArticles = async (dispatch) => {
  //Dispatch an action with type PENDING in order to display loading animation
  dispatch({ type: PENDING });

  //Make axios get request inside await, then response is stored in articles
  let articles = await axios.get('/api/medium').then((res) => res.data);

  //Dispatch an action where the type is action we just created and the payload is the result of the axios get request
  dispatch({ type: REQUEST_ARTICLES, payload: articles });
};

//Reducer Function
export default function mediumReducer(state = initialState, action) {
  switch (action.type) {
    case PENDING: //Pending action
      return {
        ...state,
        loading: true,
      };

    case REQUEST_ARTICLES: //Request articles action
      return {
        loading: false,
        articles: action.payload,
      };

    default:
      return state;
  }
}
