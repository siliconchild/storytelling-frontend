import { BASE_API_URL } from "./Common";

const axios = require('axios');

const DataService = {
    Init: function () {
        // Any application initialization logic comes here
    },
    GetStories: async function () {
        return await axios.get(BASE_API_URL + "/stories");
    },
    GetStory: async function (id) {
        return await axios.get(BASE_API_URL + "/stories/" + id);
    },
    CreateStory: async function (obj) {
        return await axios.post(BASE_API_URL + "/stories", obj);
    },
    UpdateStory: async function (id, obj) {
        return await axios.put(BASE_API_URL + "/stories/" + id, obj);
    },
    GetStoryInputImages: async function (id) {
        return await axios.get(BASE_API_URL + "/stories/" + id + "/input_images");
    },
    GetStoryTitleImages: async function (id) {
        return await axios.get(BASE_API_URL + "/stories/" + id + "/title_images");
    },
    GetStorylineImages: async function (id, line) {
        return await axios.get(BASE_API_URL + "/stories/" + id + "/storyline_images/" + line);
    },
    UploadInputImage: async function (id, formData, filename) {
        return await axios.post(BASE_API_URL + "/stories/" + id + "/upload_input_image/" + filename, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
}

export default DataService;