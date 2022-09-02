import React from 'react'
import ListaItem from "./data.json";
import Item from './Item';
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
const lista = ListaItem;
export default function Listado(props) {
  return (
    <div className='container'>
      {
        lista.map((items)=>{
          return(
            <Item 
             key ={items.id}
             nombre ={items.producto.nombre}
             descripcion ={items.producto.descripcion}
             stockItem ={items.stock}
             aumentarCarrito = {props.aumentarCarrito}
            />
           )
        })
        
      }
    </div>
  )

}
