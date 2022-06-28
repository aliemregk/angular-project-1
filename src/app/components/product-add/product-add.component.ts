import { Category } from './../../models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  numberOfCategories: number = 0;

  constructor(private formBuilder: FormBuilder,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.createProductAddForm();
    this.getNumberOfCategories();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required],
      categoryId: ["", Validators.required],
      description: ["", Validators.required],
    })
  }

  getNumberOfCategories() {
    this.categoryService.getCategories().subscribe(c => {
      this.numberOfCategories = c.data.length
    });
  }

  add() {

  }

}
