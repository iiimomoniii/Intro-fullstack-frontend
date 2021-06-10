import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebapiService } from '@services/webapi.service';
import { Product } from '@models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private webapi: WebapiService
  ) { }
  
  getProducts(): Observable<Product>{
    return this.webapi.get<Product>('product');
  }

}
