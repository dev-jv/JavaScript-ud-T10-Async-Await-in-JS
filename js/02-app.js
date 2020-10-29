function descargarClientes() {

    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout(() => {
            if(!error) {
                resolve('El Listado de Clientes se descargo correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    })
}

// Async await
 async function ejecutar() {
  try {
      console.log(1 + 1);
      const respuesta = await descargarClientes();

      console.log( 2 + 2);
      console.log(respuesta);
  } catch (error) {
      console.log(error);
  }
}
ejecutar();


/*
función asíncrona, la cual devuelve un objeto AsyncFunction.

Puede existir async sin await, peno no await sin async

síncrono:
Cada transmisión de datos sucesiva requiere una respuesta a la transmisión previa, antes de que pueda iniciarse una nueva. La comunicación síncrona de programas contrasta con la comunicación asíncrona de programas.

...Asincronía hace referencia al suceso que no tiene lugar en total correspondencia temporal con otro suceso.

*/