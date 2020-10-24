import axios from "axios";

export default {
getLists: function () {
    return axios.get("api/users/");
    
},

getList: function (id) {
    return axios.get("api/user/"+ id);
},

deleteList: function(id) {
    return axios.delete("/api/user/"+ id);
},

saveList: function(userData) {
    return axios.post("/api/user", userData);
}

};