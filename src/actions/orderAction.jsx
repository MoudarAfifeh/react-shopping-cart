import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER } from '../types';

export const createOrder = (order) => (dispatch) => {
    fetch("/api/orders", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(order)
    }).then(res => res.json())
        .then(data => {
            dispatch({
                type: CREATE_ORDER,
                payload: data
            })
            // localStorage.clear("cartItems");
            // dispatch({
            //     type: CLEAR_CART
            // })
            console.log(data)
        })
}
export const clearOrder = () => (dispatch) => {
    dispatch({ type: CLEAR_ORDER })
}