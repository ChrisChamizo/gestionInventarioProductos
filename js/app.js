//se desarrolla un sistema de gestion de inventario para una tienda
let inventario = [
    {
        nombre: "Laptop",
        categoria: "Electrónica",
        precio: 1000,
        cantidad: 10,
        codigo: "P001"
    },
    {
        nombre: "Smartphone",
        categoria: "Electrónica",
        precio: 700,
        cantidad: 25,
        codigo: "P002"
    },
    {
        nombre: "Teclado",
        categoria: "Accesorios",
        precio: 50,
        cantidad: 50,
        codigo: "P003"
    },
    {
        nombre: "Monitor",
        categoria: "Electrónica",
        precio: 300,
        cantidad: 15,
        codigo: "P004"
    },
    {
        nombre: "Silla de Oficina",
        categoria: "Muebles",
        precio: 150,
        cantidad: 20,
        codigo: "P005"
    }
];
let producto ={
    nombre: "Mouse",
    categoria: "Accesorios",
    precio: 900,
    cantidad:40,
    codigo: "P006"
};

//funciones
    function agregarProducto(productos){
    inventario.push(producto)
}
    function eliminarProducto(codigo) {
        let LongitudInventarioInicio = inventario.length
        inventario = inventario.filter(producto => producto.codigo !== codigo); // Filtro los productos del inventario según la condición.

        if(inventario.length < LongitudInventarioInicio){
            console.log("Producto eliminado.")
        }
        else{
            console.log("producto no encontrado.")
        }
    }

    function actualizarCantidad(codigo,nuevaCantidad){
        let producto = inventario.find(producto => producto.codigo ==codigo)
        if(producto){
            producto.cantidad =nuevaCantidad
    }
}
    function buscarProductoPorCategoria(categoria){
        //filtro los productos por categoria con filter
        return inventario.filter(producto => producto.categoria==categoria)

        //producto son cada elemento de mi objeto producto

    }
    function calcularValorTotal(){
        return inventario.reduce((total,precio) => total + (producto.precio * producto.cantidad),0) 
    }
   //utilizo el metodo reduce para sumar el valor total de cada producto en el inventario. Para cada producto, multiplico su precio por su cantidad y sumo este valor al total acumulado.

   //El valor inicial del acumulador en reduce es 0.


    //ejecucion de funciones
    agregarProducto(producto)
    eliminarProducto("P001");
     actualizarCantidad("P003",60)
    let categoriaBuscada = "Electrónica";
     let productosEncontrados = buscarProductoPorCategoria(categoriaBuscada);
    console.log(`Productos en la categoría "${categoriaBuscada}":`, productosEncontrados);
    let valorTotal =calcularValorTotal()
    console.log(`el valor total del inventario es $${valorTotal}`)

     //Aclaracion: El console.log() de la cantidad de productos por categoria y el valor total
     //del inventario lo dejo visible porque el enunciado me pide que lo muestre por pantalla,
      //mas alla de que se tiene que borrar.
   
