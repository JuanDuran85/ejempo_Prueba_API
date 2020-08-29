import axios from 'axios';

export const API = async function(parametro1){
    try {
        //https://cors-anywhere.herokuapp.com/ para problemas con cors
        let base_url = `https://pruebafrontend.desafiolatam.com/api/v1`;
        let response = await axios.get(`${base_url}/${parametro1}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

/* export async function apiCall(param1, param2) 
{
    try 
    {
        let api = 'incluir link de la api sin parámetros aquí';
 
        const res = await axios.get(api, {
            // igual me la puedo traer desde una variable si quiero
                params: {
                    apikey: 'apikey',
                    parametro1: param1,
                    parametro2: param2,
                    // seguir así para cada parámetro que se quiera agregar. 
                    // Se aconseja considerar el caso 'vacío' (con if, por ej)
                }
         })
         return res
    } 
    catch (error) 
    {
        console.log(error);
    }
} */
