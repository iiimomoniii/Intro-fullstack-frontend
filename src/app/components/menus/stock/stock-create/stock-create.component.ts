import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductResponse, ProductRequest } from '@models/product.model';
import { ProductService } from '@services/product.service';
@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.scss']
})
export class StockCreateComponent implements OnInit {

  //pipe "|"" for more 1 type
  imagePreview : string | ArrayBuffer | null;
  //file for image
  file : File;

  addProductForm : FormData;
  
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  onPreviewImage(event : Event){
    const image =  (event.target as HTMLInputElement)?.files?.[0];
    if (image) {
      //assign image to file for get name
      this.file = image;
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
    }
  }

  onSubmit(productForm : NgForm){
    //check require field from productForm
    if(productForm.invalid){
      return;
    }
    //get values from productForm
    const values = productForm.value;
    let product = new ProductRequest();
    product.name = values.name;
    product.price = values.price;
    product.stock = values.stock;
    product.image = this.file;
 
  this.productService.addProduct(this.productForm(product)).subscribe(
      data => {
        alert(JSON.stringify(data));
      },
      error => {
        alert(error.error.message);
      }
    );
  }

  //use FormData for upload image together
  productForm (product : ProductRequest) : FormData {
    const formData = new FormData();
    //appen key and value into formData
    formData.append('name', product.name);
    formData.append('photo', product.image);
    formData.append('stock', `${product.stock}`);// => convert number to string
    formData.append('price', `${product.price}`);
    return formData;
  }



}
