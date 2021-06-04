import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '@models/product.model';
@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.scss']
})
export class StockHomeComponent implements OnInit {

  //Data Objects
  displayedColumns : string[] = ['image', 'name', 'price','stock', 'action'];
  dataSource = new MatTableDataSource<Product>();

  //search 
  textSearch: string;

  constructor() { }

  ngOnInit(): void {
    this.feedData();
  }

  //call datas from fake datas
  feedData(){
    
    const dummy: Product[] = [
     {
      name : "Repellat ipsam placeat ex alias sunt. Dolore mollitia rerum a veritatis consectetur hic veniam. Ipsam reprehenderit itaque fugit accusamus culpa libero et qui. Quia ipsum et facere. Quos eveniet itaque sequi cupiditate.",
      stock : 100,
      price : 20000,
      image: "assets/images/products/macbook.jpg"
     },
     {
      name : "macbook",
      stock : 100,
      price : 12542,
      image: "assets/images/products/macbook.jpg"
     },
     {
      name : "macbook",
      stock : 100,
      price : 1454,
      image: "assets/images/products/macbook.jpg"
     },
     {
      name : "macbook",
      stock : 100,
      price : 187811,
      image: "assets/images/products/macbook.jpg"
     },
     {
        name : "macbook",
        stock : 100,
        price : 15448,
        image: "assets/images/products/macbook.jpg"
      },
    ];

    this.dataSource.data = dummy;
  }

  search(event :any){
    let fliterValue = '';
    if (event) {
      //tranfer and get value from HTML Input 
      fliterValue = (event.target as HTMLInputElement).value;
    }
    this.dataSource.filter = fliterValue.trim().toLocaleLowerCase();
  }

  clearSearch(){
    this.textSearch = '';
    this.search(null);
  }

}
