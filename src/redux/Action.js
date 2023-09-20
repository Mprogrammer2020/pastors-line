// API data handle function
export const setResponse = (res) => {
    return {
        type: "RESPONSE",
        payload: res
    }
}

// Page handle function
export const setPage = (page) => {
    return {
        type: "PAGE",
        payload: page
    }
}