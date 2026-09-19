let users = [];
async function fetchUsers() {
    const apiURL = "./assets/data/users-data.json";


const response = await fetch(apiURL);
const data = await response.json();

//users = data;
//console.log(data);

return data;
}

users = await fetchUsers();

export default users;