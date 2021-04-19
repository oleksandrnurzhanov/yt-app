import axios from "axios";

const KEY = "AIzaSyBC479VNl6sraNKHM0p0-SS8rnK644LWKM";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

export default youtube;
