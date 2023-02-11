import axios from "axios";

export const GET_LIST_QASIDAH = "GET_LIST_QASIDAH"

export const getListQasidah = () => {
    return (dispatch) => {
        //loading
        dispatch({
            type : GET_LIST_QASIDAH,
            payload : {
                loading : true,
                data : false,
                errorMessage : false
            }
        })

        //get API
        axios.get("https://myqasidah.up.railway.app/qasidahs", {timeout : 120000})
        .then((response) => {
            dispatch({
                type : GET_LIST_QASIDAH,
                payload : {
                    loading : false,
                    data : response.data,
                    errorMessage : error.message
                }
            })
        })
    }
}