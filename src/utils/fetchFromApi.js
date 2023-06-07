import axios from "axios";

const URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
        maxResults: "50",
    },
    headers: {
        "X-RapidAPI-Key": "3f732f0423msh628244629c0e783p14ca8bjsn59e1aa17290f",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

export async function fetchFromApi(url) {
    try {
        const response = await axios.get(`${URL}/${url}`, options);
        // console.log(response);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}
