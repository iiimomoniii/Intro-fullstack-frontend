import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebapiService } from '@services/webapi.service';
import { ProductRequest, ProductResponse } from '@models/product.model';

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

  getImagesByURL(image : string): string {
   return this.webapi.getImagesByURL(image);
  }

  deleteProduct(id: number) : Observable<string>{
    return this.webapi.delete<string>(`product/${id}`);
  }

  addProduct(productForm: FormData) : Observable<ProductResponse>{
    return this.webapi.post<ProductResponse>(`product`, productForm);
  }



}
