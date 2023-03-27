// Async / await 2 llamadas

function descargarNuevosClientes() {
    return new Promise (resolve => {
        console.log('Descargando clientes... Espere...');

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function descargarUltimosPedidos() {
    return new Promise (resolve => {
        console.log('Descargando pedidos... Espere...');

        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}

async function app() {
    try {
        // Una llamada async / await
        // const clientes = await descargarNuevosClientes();
        // console.log(clientes);

        // Para dos llamadas async / await
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Este código no se bloquea');