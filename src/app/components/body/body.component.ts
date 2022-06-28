import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  categories: Category[] = [];
  dataLoaded = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data
      this.dataLoaded = true
    })
  }
}
