// Task 2: listUsers()

// import { getServerURL } from "./task1.js";
import { getServerURL } from "./task1.js"

export async function listUsers() {
    const thisURL = getServerURL() + "/users"
    return fetch(String(thisURL))
        .then(respuesta => respuesta.json())
        .then(lista => {
            console.log(lista)
        })
        .catch(error => console.log(error));
}