
function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes....');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    }) 
}

function descargarNuevosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos....');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    }) 
}

const app = async () => { //....(1)
    try {
        const clientes = await descargarNuevosClientes();
        console.log(clientes);

        const pedidos = await descargarNuevosPedidos();
        console.log(pedidos);

    } catch (error) {
        console.log(error);
    }
}

// const app = async () => {  //....(2)
//     try {
//         const respuesta = await Promise.all([ descargarNuevosClientes(), descargarNuevosPedidos()]);
//         // console.log(respuesta);
//         console.log(respuesta[0]);
//         console.log(respuesta[1]);
//     } catch (error) {
//         console.log(error);
//     }
// }

app();

/*

Lo normal es que el código se ejecute linealmente y continué sin detenerse aun cuando en algún punto aún no haya terminado. Y de hecho al final de dicho punto podría llamar a otro determinado punto, e incluso pasarle algún valor.

En la primera forma (1) se ejecuta el promise y mientras no se resuelva no continúa.

En la segunda forma (2) se ejecutan ambos promise en paralelo, conveniente para funciones independientes

*/