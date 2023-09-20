const initialState = {
    data: {},
    page: 1
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        // Handle API response
        case "RESPONSE": {
            return {
                ...state,
                data: action.payload
            }
        }

        // Handle current page
        case "PAGE": {
            return {
                ...state,
                page: action.payload
            }
        }

        default: {
            return state
        }

    }

}

export default rootReducer;