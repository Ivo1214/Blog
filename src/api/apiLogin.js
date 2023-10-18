import {client} from "./client";

export const apiLogin = {
    post: async function (name, pass) {
        const datos = {
            usuario: name.toString(),
            password: pass.toString()
        };
        const response = await client.request({
            url: '/login',
            method: 'POST',
            headers: {'Content-type':'application/x-www-form-urlencoded'},
            data: datos
        })

        if (response){
            return response.data;
        }
    }
}