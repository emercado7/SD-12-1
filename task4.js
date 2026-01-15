// Task 4: delUser(number)

import * as t1Utils from "./task1.js"

export async function delUser(id) {
  fetch(t1Utils.getServerURL()  + "/users/" + String(id), {
  method: 'DELETE',
}).then(respuesta => respuesta.json())
  .then(datos => console.log(datos))
}