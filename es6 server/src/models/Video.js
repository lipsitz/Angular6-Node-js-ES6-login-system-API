

class Video {
    /**
     * class constructor
     * @param {object} data
     * @returns {object} video object
     */
    getAll(data) {
        const axios = require('axios');
        return axios.get("http://www.omdbapi.com/?apikey=2b17fbae&s=" + data.t + "&y=" + data.y)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response;
            })
    }
}

export default new Video();