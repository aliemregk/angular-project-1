import { Product } from '../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  dataLoaded = false;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getProductsByCategoryId(params["id"]);
      } else {
        this.getProducts();
      }
    })

  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data
      this.dataLoaded = true
    })
  }

  getProductsByCategoryId(id: number) {
    this.productService.getProductsByCategoryId(id).subscribe((response) => {
      this.products = response.data
      this.dataLoaded = true
    })
  }

}
