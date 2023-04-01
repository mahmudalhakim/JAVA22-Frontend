import { getUsers } from "./export.js";

async function render() {
    const users = await getUsers();
    console.log(users);

    document.getElementById('output').innerHTML = JSON.stringify (users);
}

document.getElementById('getBtn').addEventListener('click', render);