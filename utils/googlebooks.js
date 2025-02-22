const axios = require('axios')

module.exports = async (phrase) => {
    const result = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })


    //
    //TODO: return a formattedObj
    var formattedObj = {
        data: result.data, 
        status: result.status, 
        statusText: result.statusText, 
        headers: result.headers,
        requestHeader: result.config.headers
    }

    //TODO: return the formattedObject
    return JSON.stringify(formattedObj);
}
