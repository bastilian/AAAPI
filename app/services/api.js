import axios from "axios";

export const fetchData = (url, params, headers, method, data =  undefined) => {
    return axios({
        method,
        url: `${url}?${params}`,
        data: data && data,
        headers
      });
}