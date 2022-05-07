import axios from "axios";

// Endpoint for organization methods
const API_URL = '/api/org';
// Get all organizations linked to the user.
const getUserOrganizations = async(userData) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + userData.token
        }
    };
    const response = await axios.get(API_URL + '/user/all', config);
    return response.data;
}
// Insert new organization
const insertOrganization = async(userData, data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + userData.token
        }
    };
    const response = await axios.post(API_URL, data, config);
    return response.data;
}
// Service object
const orgService = {
    getUserOrganizations,
    insertOrganization
}

export default orgService;