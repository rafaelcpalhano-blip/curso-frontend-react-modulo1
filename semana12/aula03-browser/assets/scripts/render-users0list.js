import users from "./fetch-users.js";

const usersList = document.getElementById("users-list");

export function renderUsers() {
usersList.innerHTML = users.map((user) => {
return `
<p>${user.name}</p>
`
}).join("");
}