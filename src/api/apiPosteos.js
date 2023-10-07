import {client} from "./client";

export const apiPosteos = {
    get: async function (usuario) {
        const response = await client.request({
            url: `/posteos/${usuario}`,
            method: 'GET'
        })
        
        if (response){
            // console.log(response.data);
            return response.data;
        }
    },

    post: async function (usuario, tittle, text) {

        const data = {
            titulo: tittle,
            texto: text
        }
        const response = await client.request({
            url: `/posteos/${usuario}`,
            method: 'POST',
            data: data
        })
        
        if (response){
            // console.log(response.data);
            return response.data;
        }
    },

    leerPosteo: async function (usuario, posteo_id){
        const response = await client.request({
            url: `/posteos/${usuario}/detail/${posteo_id}`,
            method: 'GET'
        })
        
        if (response){
            // console.log(response.data);
            return response.data;
        }
    },

    updatePosteo: async function (usuario, posteo_id, titulo, texto){
        const response = await client.request({
            url: `/posteos/${usuario}/update/${posteo_id}`,
            method: 'PUT',
            data: {titulo, texto}
        })
        
        if (response){
            // console.log(response.data);
            return response.data;
        }
    },

    deletePosteo: async function (usuario, posteo_id){
        const response = await client.request({
            url: `/posteos/${usuario}/delete/${posteo_id}`,
            method: 'DELETE'
        })
        
        if (response){
            // console.log(response.data);
            return response.data;
        }
    }
};