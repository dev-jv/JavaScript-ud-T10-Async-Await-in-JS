const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

// function obtenerDatos() { // un fetch normal con un cath incluido
//     fetch(url)
//         .then(respuesta => respuesta.json())
//         .then(resultado => console.log(resultado))
//         .catch(error => console.log(error));
// }

// async function obtenerDatos() { // un fetch con async 
//     const respuesta = await fetch(url);
//     const resultado = await respuesta.json();
//     console.log(resultado);
// }

async function obtenerDatos() { // Un fetch, async con un try catch
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}




