import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { SearchProductComponent } from './search-product/search-product.component';

//llenar aqui las rutas
const routes: Routes = [
   {path: '', redirectTo: 'customer', pathMatch: 'full'},
   {path: 'list', component:ProductListComponent},
   {path: 'new', component: CreateProductComponent},
   {path: 'search', component: SearchProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
