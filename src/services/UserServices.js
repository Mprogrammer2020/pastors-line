import axios from "axios";

function configHeaders() {
    return {
        headers: { 'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNzI2NTY3MTc5LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjk1MDMxMTc5fQ.0y7NtuVDCvcPvmWbliMs1q02sov2oFC6u2Hi6H4A2W4" }
    }
}

// Data API
export const ContactDataApi = (page, search, country="") => {
    let url = `https://api.dev.pastorsline.com/api/contacts.json?companyId=171&page=${page}&query=${search}&countryId=${country}`
    return axios.get(url, configHeaders())
}
