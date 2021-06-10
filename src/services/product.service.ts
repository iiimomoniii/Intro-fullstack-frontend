import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebapiService } from '@services/webapi.service';
import { ProductResponse } from '@models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private webapi: WebapiService
  ) { }
  
  getProducts(): Observable<ProductResponse[]>{
    return this.webapi.get<ProductResponse[]>('product');
  }

}
