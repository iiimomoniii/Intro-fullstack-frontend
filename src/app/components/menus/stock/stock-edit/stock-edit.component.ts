import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@services/product.service';
import { ProductResponse, ProductRequest } from '@models/product.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.scss']
})
export class StockEditComponent implements OnInit {
  //pipe "|"" for more 1 type
  imagePreview: string | ArrayBuffer | null;
  //file for image
  file: File;

  @ViewChild('editProductForm', {static : true}) editProductForm : NgForm;

  constructor(
    private productService: ProductService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.feedData(params.id);
      }
    );
  }

  onPreviewImage(event: Event) {
    const image = (event.target as HTMLInputElement)?.files?.[0];
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

  onSubmit(editProductForm: NgForm) {
    //check require field from productForm
    if (editProductForm.invalid) {
      return;
    }
    //get values from productForm
    const values = editProductForm.value;
    let product = new ProductRequest();
    product.name = values.name;
    product.price = values.price;
    product.stock = values.stock;
    product.image = this.file;

    this.productService.editProduct(values.id, this.productForm(product)).subscribe(
      data => {
        Swal.fire(
          `Edit Product : ${data.name} success`,
          'You clicked the button!',
          'success'
        )
      },
      error => {
        alert(error.error.message);
      },
      () => {
        this.location.back();
      }
    );
  }

  //use FormData for upload image together
  productForm(product: ProductRequest): FormData {
    const formData = new FormData();
    //appen key and value into formData
    formData.append('name', product.name);
    formData.append('photo', product.image);
    formData.append('stock', `${product.stock}`);// => convert number to string
    formData.append('price', `${product.price}`);
    return formData;
  }

  feedData (id : number){
    this.productService.getProduct(id).subscribe(
      data => {
        //binding ProductResponce to editProductForm
        var { id, name, price , stock , image } = { ...data }
        this.imagePreview = this.productService.getImagesByURL(image);
        this.editProductForm.setValue({id, name, price , stock})
      },
      error => {
        alert(error.error.message);
      } 
    )
  }


}
