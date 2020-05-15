import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Product } from '../model/product';//se autoimportó al escribir Product abajo
import { ProductService } from '../product.service'; // se automimportó al escribir ProductService abajo


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

    products: Observable<Product[]>  // se declara el arreglo con Oservable reactivo mejor!
    //products: Product[]; // también funciona

    fDescripcion : String;

  constructor(private productService: ProductService) { } //se inyecta service

  ngOnInit(): void { //se ejecuta despúes del constructor
      this.reloadData();
  }
   reloadData(){
    // this.products =this.productService.getProductsList(); //llama a servicio, falla!
     console.log("RELOAD!")
    // this.productService.getProductsListArray().subscribe(  //llamar así al json prueba...ok!
    //  products => this.products = products
    //);
     this.productService.getProductsList().subscribe(  //llamar así al rest...ok!
       products => this.products = products
     );
   }

   procesarClic(){
     this.productService.getProductsListDescripcion(this.fDescripcion).subscribe(  //llamar así al rest...ok!
      products => this.products = products
    );
   }
}
