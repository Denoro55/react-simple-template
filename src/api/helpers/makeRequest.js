const mainBaseUrl = '/react-api/';

export default function (url, options = {}, baseUrl = mainBaseUrl) {
    return fetch(baseUrl + url, options).then(response => {
        if (response.status !== 200) {
            return response.text().then(text => {
                throw new Error(text)
            })
        }
        return response.json();
    })
}
