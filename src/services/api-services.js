import { API_BASE_URL } from "../constants/endpoints";

const updateHeaders = (header) => {
    if (header["Content-Type"] == null) {
        header["Content-Type"] = "application/json";
    }
    return header;
}

export const HttpGet = async (endPoint, header = {}) => {
    try {
        header = updateHeaders(header);
        if (typeof (endPoint) == "string") {
            let result = await get(API_BASE_URL + endPoint, header);
            return result;
        }
    } catch (error) {
        console.log("error", error);
        throw error;
    }
}

export const HttpPost = async (endPoint, header = {}, body = {}) => {
    try {
        header = updateHeaders(header);
        if (typeof (endPoint) == "string") {
            let result = await post(API_BASE_URL + endPoint, header, body);
            return result;
        }
        throw new Error("Incorrect request");
    } catch (error) {
        console.log("error", error);
        throw error;
    }
}

const get = (url, headers) => {
    return fetch(url, {
        method: 'GET',
        headers: headers
    }).then(async function (response) {
        if (response != null) {
            let result = await response.json();
            return result;
        }
    }).catch(error => {
        throw (error);
    })
}

const post = (url, headers, body) => {
    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
    }).then(async function (response) {
        if (response != null) {
            if (response.status === 200) {
                let result = await response.json();
                return result;
            } 
        }
        return null;
    }).catch(error => {
        throw (error);
    })
}