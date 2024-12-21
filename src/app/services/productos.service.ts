import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() {
    console.log("Servicio listo para usar")
   }
   private productos: Producto[] = [
    { nombre: "laptop", img: "assets/img/laptop.png", precio: 100 },
    { nombre: "Mause", img: "assets/img/mause.png", precio: 200 },
    { nombre: "Teclado", img: "assets/img/teclado.png", precio: 300 },
];

  
   getProductos():Producto[]{return this.productos;}
   getProducto(id:number){return this.productos[id];}
   buscarProductos(termino:string):Producto[]{
    let productosArr:Producto[]=[];
    termino= termino.toLowerCase();
    for(let i = 0; i < this.productos.length; i++){
      let producto = this.productos[i];
      let nombre = producto.nombre.toLowerCase();
      if(nombre.indexOf(termino)>=0){
        productosArr.push(producto)
      }
    }
    return productosArr;
   }

}
