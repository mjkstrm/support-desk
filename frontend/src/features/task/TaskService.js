import axios from "axios"

// Endpoint for task methods
const API_URL = "/api/task";
// Get all tickets the user has rights to.
const getTasks = async(userData) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + userData.token
        }
    };
    const response = await axios.get(API_URL + '/user/all', config);
    return response.data;
}
// Insert
const insertTask = async(userData, data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + userData.token
        }
    };
    const response = await axios.post(API_URL, data, config);
    return response.data;
}
// Update
const updateTask = async(userData, data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + userData.token
        }
    };
    const response = await axios.put(API_URL, data, config);
    return response.data;
}
// Delete
const deleteTask = async(userData, data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + userData.token
        }
    };
    const response = await axios.delete(API_URL, data, config);
    return response.data;
}

// Service object
const taskService = {
    getTasks,
    insertTask,
    updateTask,
    deleteTask
};

export default taskService;