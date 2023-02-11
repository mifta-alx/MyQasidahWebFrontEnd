import axios from "axios";
import jwt_decode from "jwt-decode";

export const GET_USER = "GET_USER";
export const REFRESH_TOKEN = "REFRESH_TOKEN";

export const getUser = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    //get API
    axios
      .get("https://myqasidah.up.railway.app/user", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        dispatch({
          type: GET_USER,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const refreshToken = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: REFRESH_TOKEN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    //get API
    axios
      .get("https://myqasidah.up.railway.app/token", {
        headers: { Authorization: localStorage.getItem("refresh_token") },
      })
      .then((response) => {
        console.log(response)
        dispatch({
          type: REFRESH_TOKEN,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: REFRESH_TOKEN,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
