import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html'
})
export class CreateProductComponent implements OnInit {

  
   product: Product = new Product(); //ojo no debe ser privado x el form

  constructor(private productService: ProductService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log("CLICK");
    console.log(this.product);
    //puedo hacer un if para ver si grabo o actualizo!
    this.productService.createProduct(this.product).subscribe(
      data => this.router.navigate(['/list'])
    );
    //this.product = new Product();
  }
}
