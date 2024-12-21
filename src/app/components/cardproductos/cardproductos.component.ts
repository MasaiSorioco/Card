import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardproductos',
  standalone: false,
  
  templateUrl: './cardproductos.component.html',
  styleUrls: ['./cardproductos.component.css']
})
export class CardproductosComponent implements OnInit{
  productos:Producto[]=[];
  constructor(private _productosService:ProductosService,
    private router:Router
  ){}
  ngOnInit() {
      this.productos = this._productosService.getProductos();

  }
  verProducto(idx:number){
    this.router.navigate(['/producto',idx]);
  }
}



