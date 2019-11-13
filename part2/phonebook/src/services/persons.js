import axios from "axios";
const url = "http://localhost:3001/persons";

const add = newObject => {
  const request = axios.post(url, newObject);
  return request.then(response => response.data);
};

const remove = id => {
  const request = axios.put(`${url}/${id}`);
  return request.then(response => response.data);
};

export default { add, remove };
