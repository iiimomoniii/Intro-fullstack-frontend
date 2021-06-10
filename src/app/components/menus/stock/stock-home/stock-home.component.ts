import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '@models/product.model';
import { ProductService } from '@services/product.service';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.scss']
})
export class StockHomeComponent implements OnInit {

  //Data Objects
  displayedColumns: string[] = ['image', 'name', 'price', 'stock', 'action'];
  dataSource = new MatTableDataSource<Product>();

  //search 
  textSearch: string;

  //sort
  //bind sort to matSort
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  //paging
  //bind sort to mat-paginator
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.feedData();
  }

  //call datas from fake datas
  feedData() {

    //get product by observable
    //observable 
    this.productService.getProducts().subscribe(
      data => {
        //success
        //.map for get image path from url
        this.dataSource.data = data.map(item => {
          item.image = this.productService.getImagesByURL(item.image);
          return item
        });
      }, error => {
        //error
        alert(JSON.stringify(error.error.message))
      },
      () => {
        //complete
        alert("fedd network done")
      }
    )

  }

  search(event: any) {
    let fliterValue = '';
    if (event) {
      //tranfer and get value from HTML Input 
      fliterValue = (event.target as HTMLInputElement).value;
    }
    this.dataSource.filter = fliterValue.trim().toLocaleLowerCase();
  }

  clearSearch() {
    this.textSearch = '';
    this.search(null);
  }

}
