import { GET_USER, REFRESH_TOKEN } from "../../actions/userAction";

const initialState = {
  getUserResult: false,
  getUserLoading: false,
  getUserError: false,
  getRefreshResult: false,
  getRefreshLoading: false,
  getRefreshError: false,
};

const user = (state = {initialState}, action) => {
  switch(action.type){
    case GET_USER : 
    return{
      ...state,
      getUserLoading: action.payload.loading,
      getUserResult:action.payload.data,
      getUserError: action.payload.errorMessage,
    }
    case REFRESH_TOKEN : 
    return{
      ...state,
      getRefreshLoading: action.payload.loading,
      getRefreshResult:action.payload.data,
      getRefreshError: action.payload.errorMessage,
    }
    default:
    return state
  }
};
export default user;
