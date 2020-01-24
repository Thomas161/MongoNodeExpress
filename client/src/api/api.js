import axios from "axios";
export default axios.create({
  //React is running on port 3000
  //express is on 5000, proxied via package.json
  baseURL: "http://localhost:5000/"
});
