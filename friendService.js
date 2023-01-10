import axios from "axios";

let getAddFriend = (payload) => {

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/friends",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let getEditFriend = (payload) => {

  const config = {
    method: "PUT",
    url: "https://api.remotebootcamp.dev/api/friends",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};
const addEditService = {getAddFriend,getEditFriend};
export default addEditService;      