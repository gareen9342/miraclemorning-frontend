import axios from "axios";

axios.defaults.baseURL = process.env.backUrl;
axios.defaults.withCredentials = true;

// method, header포함 여부, uri, data
const headers = {
  "Content-Type": "application/json",
};

// method을 많이 분리하고 싶은데 ApiService 분리를...해야하나 말아야하나 ㅠㅠ
const ApiService = () => {};

ApiService.get = async (uri, withHeader = false) => {
  let response = {};
  if (withHeader) {
    headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }
  console.log("asdf", headers);
  try {
    response = await axios.get(`${uri}`, {
      headers,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
  return response;
};

ApiService.post = async (uri, body, withHeader = false) => {
  let response = {};
  if (withHeader) {
    headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }
  try {
    response = await axios.post(`${uri}`, body, { headers });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
  return response;
};

export default ApiService;
