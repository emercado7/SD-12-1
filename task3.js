// Task 3: addUser(first_name, last_name, email)
import * as t1Utils from "./task1.js"

export async function addUser(first_name, last_name, email) {
  try {
    const getResponse = await fetch(t1Utils.getServerURL() + "/users");

    if (!getResponse.ok) {
      throw new Error(`GET request failed: ${getResponse.status}`);
    }

    const data = await getResponse.json();
    const dataLen = Object.keys(data).length

    const postData = {
        id: String(dataLen + 1),
        first_name: first_name,
        last_name: last_name,
        email: email
    };

    const postResponse = await fetch(t1Utils.getServerURL() + "/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    });

    if (!postResponse.ok) {
      throw new Error(`POST request failed: ${postResponse.status}`);
    }

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// addUser("Esteban", "Mercado", "esteban.mercado725@gmail.com");
// t2Utils.listUsers()