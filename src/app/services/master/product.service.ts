import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }




  addProduct(value) {
    return this.http.post(`http://localhost:8080/product/addproduct`, value);
  }
  getProducts() {
    return this.http.get('http://localhost:8080/product/getproduct');
  }
  }
