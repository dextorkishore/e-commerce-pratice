import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ApiResponseModel, IProduct } from '../../core/models/Model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe(
      (res: ApiResponseModel) => {
        this.productList = res.data;
        console.log(this.productList);
      },
      (error) => {
        console.error('Error from the API', error);
        // You may want to handle errors more gracefully
      }
    );
  }
}
