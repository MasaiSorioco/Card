import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardproductosComponent } from './components/cardproductos/cardproductos.component';
import { CardproductoComponent } from './components/cardproducto/cardproducto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardbuscadorComponent } from './components/cardbuscador/cardbuscador.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'productos',component:CardproductosComponent},
  {path:'producto/:id',component:CardproductoComponent},
  {path:'buscar/:termino',component:CardbuscadorComponent},
  {path:'**',component:InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
