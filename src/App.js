// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import { useState} from "react";


function App() {
  const [aumentarCarrito, setaumentarCarrito] = useState(0);
 
  function carritoCompras(){
    const carrito =  aumentarCarrito +1 ;
    setaumentarCarrito(carrito);
    
  }

 
 
  return (
    <div className="App">
      <Cabecera totalCarrito ={aumentarCarrito} />
      <Listado aumentarCarrito ={carritoCompras} />
    </div>
  );
}


export default App;
