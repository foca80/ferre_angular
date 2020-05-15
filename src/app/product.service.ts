import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //importar en app.module.ts
import { Observable, of, throwError } from 'rxjs';
import { Product } from './model/product';
import { PRODUCTS } from './model/product.json';
import { map, catchError } from 'rxjs/operators';  ///para llamar REST
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlBase = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  //inyectamos y no olvidar importarlo en app.module.ts
  constructor(private http: HttpClient) { }

  getProduct(id: number) : Observable<Object>{
    return this.http.get('${this.baseUrl}/${id}')
  }
  
  createProduct(product: Object): Observable<Object>{
    console.log("enviando rest create....")
    return this.http.post(this.urlBase+ '/producto', product, {headers: this.httpHeaders}); //ojo prueba sin headers
  }
  
  updateProduct(id:number, value: any): Observable<Object>{
    return this.http.post('${this.baseUrl}/${id}', value)
  }
  deleteProduct(id:number): Observable<any> {
    return this.http.delete('${this.baseUrl/${id}', {responseType: 'text'});
  }
  getProductsList() : Observable<any>{
    console.log("Llamando al REST: " + this.urlBase + "/productos")
    //return this.http.get('${this.baseUrl}'); //llamar al REST simple, no funciona!
    return this.http.get(this.urlBase+ "/productos").pipe(  //ideal para llamar sin usar streams de java
      map(response => response as Product[]),
      catchError(e => {
        alert(e.status+ ":" + e.error.message)
      return throwError;
    );
  }
  getProductsListDescripcion(descripcion:String) : Observable<any>{
    console.log("Llamando al REST Nombre: " + this.urlBase + "/productos/"+descripcion)
    //return this.http.get('${this.baseUrl}'); //llamar al REST simple, no funciona!
    return this.http.get(this.urlBase+ "/productos/"+ descripcion).pipe(  //ideal para llamar sin usar streams de java
      map(response => response as Product[]),
      catchError(e => {
        alert(e.status+ ":" + e.error.message)
      return throwError;
      })
    );
  }
  getProductsListArray() : Observable<any>{
    
    console.log("Array!!")
    return of(PRODUCTS);//llama a json temporal
  }
   //para actualizar
  getProducById(id:number) :Observable<any>{
    return this.http.get('${this.baseUrl}/search/${id}');
  }

  deleteAll(): Observable<any>{
    return this.http.delete('${baseUrl}', {responseType:'text'})  
  }

}
