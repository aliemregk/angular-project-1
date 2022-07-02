import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userUpdateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.userUpdateForm = this.formBuilder.group({

    })
  }


  add() {
    if (this.userUpdateForm.valid) {
      let productModel = Object.assign({}, this.userUpdateForm.value);
      this.productService.add(productModel).subscribe({
        next: (response) => { this.toastrService.success("Added successfully.", response.message) },
        error: (errorResponse) => { this.toastrService.error("Can not add.", errorResponse.message) },
        complete: () => this.router.navigate(["product-panel"])
      })
    }
  }
}
