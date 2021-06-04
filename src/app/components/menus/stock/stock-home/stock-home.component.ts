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

  constructor() { }

  ngOnInit(): void {
    this.feedData();
  }

  //call datas from fake datas
  feedData(){
    
    const dummy = [
      new Product(),
      new Product(),
      new Product(),
    ];

    this.dataSource.data = dummy;
  }


}
