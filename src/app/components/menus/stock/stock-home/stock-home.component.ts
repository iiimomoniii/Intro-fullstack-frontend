import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '@models/product.model';
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

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.feedData();
  }

  //call datas from fake datas
  feedData() {

    //get product by observable
    //observable 
    this.httpClient.get("http://localhost:1150/product/30").subscribe(
      data => {
        //success
        alert(JSON.stringify(data));
      }, error => {
        //error
        alert(JSON.stringify(error.error.message))
      },
      ()=> {
        //complete
        alert("fedd network done")
      }
    )

    const dummy: Product[] = [
      {
        name: "Repellat ipsam placeat ex alias sunt. Dolore mollitia rerum a veritatis consectetur hic veniam. Ipsam reprehenderit itaque fugit accusamus culpa libero et qui. Quia ipsum et facere. Quos eveniet itaque sequi cupiditate.",
        stock: 100,
        price: 20000,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 12542,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 1454,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 187811,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 15448,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "Repellat ipsam placeat ex alias sunt. Dolore mollitia rerum a veritatis consectetur hic veniam. Ipsam reprehenderit itaque fugit accusamus culpa libero et qui. Quia ipsum et facere. Quos eveniet itaque sequi cupiditate.",
        stock: 100,
        price: 20000,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 12542,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 1454,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 187811,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 15448,
        image: "assets/images/products/macbook.jpg"
      }, {
        name: "Repellat ipsam placeat ex alias sunt. Dolore mollitia rerum a veritatis consectetur hic veniam. Ipsam reprehenderit itaque fugit accusamus culpa libero et qui. Quia ipsum et facere. Quos eveniet itaque sequi cupiditate.",
        stock: 100,
        price: 20000,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 12542,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 1454,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 187811,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 15448,
        image: "assets/images/products/macbook.jpg"
      }, {
        name: "Repellat ipsam placeat ex alias sunt. Dolore mollitia rerum a veritatis consectetur hic veniam. Ipsam reprehenderit itaque fugit accusamus culpa libero et qui. Quia ipsum et facere. Quos eveniet itaque sequi cupiditate.",
        stock: 100,
        price: 20000,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 12542,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 1454,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 187811,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 15448,
        image: "assets/images/products/macbook.jpg"
      }, {
        name: "Repellat ipsam placeat ex alias sunt. Dolore mollitia rerum a veritatis consectetur hic veniam. Ipsam reprehenderit itaque fugit accusamus culpa libero et qui. Quia ipsum et facere. Quos eveniet itaque sequi cupiditate.",
        stock: 100,
        price: 20000,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 12542,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 1454,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 187811,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 15448,
        image: "assets/images/products/macbook.jpg"
      }, {
        name: "Repellat ipsam placeat ex alias sunt. Dolore mollitia rerum a veritatis consectetur hic veniam. Ipsam reprehenderit itaque fugit accusamus culpa libero et qui. Quia ipsum et facere. Quos eveniet itaque sequi cupiditate.",
        stock: 100,
        price: 20000,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 12542,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 1454,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 187811,
        image: "assets/images/products/macbook.jpg"
      },
      {
        name: "macbook",
        stock: 100,
        price: 15448,
        image: "assets/images/products/macbook.jpg"
      },
    ];

    this.dataSource.data = dummy;
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
