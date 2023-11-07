import axios from 'axios';

const apiBaseUrl = 'http://localhost:5118';

const registreeApi = `${apiBaseUrl}/api/registrees`;

// CRUD functionality:

// CREATE:
export async function createRegistree(registree) {
  try {
    const response = await axios.post(registreeApi, registree);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// READ:
export async function getRegistrees() {
  try {
    const response = await axios.get(registreeApi);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// UPDATE:
export async function updateRegistree(registreeId, registree) {
  try {
    const response = await axios.put(
      `${registreeApi}/${registreeId}`,
      registree,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

// DELETE:
export async function deleteRegistree(registreeId, registree) {
  try {
    const response = await axios.delete(
      `${registreeApi}/${registreeId}`,
      registree,
    );
  } catch (error) {
    throw error;
  }
}
