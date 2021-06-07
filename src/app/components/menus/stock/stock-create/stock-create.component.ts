import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '@models/product.model';
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
  
  constructor() { }

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
    //new product obj
    let product = new Product();
    //assign value to obj
    product.name = values.name;
    product.price = values.price;
    product.stock = values.stock;
    product.image = this.file.name;
    alert(JSON.stringify(product));
  }

}
