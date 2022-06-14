import { Component, OnInit } from '@angular/core';
import { MainCategoryService } from 'src/app/services/mainCategory.service';
import { MainCategory } from 'src/app/models/mainCategory';

@Component({
  selector: 'app-mainCategory',
  templateUrl: './mainCategory.component.html',
  styleUrls: ['./mainCategory.component.css']
})
export class MainCategoryComponent implements OnInit {

  categories: MainCategory[] = [];
  dataLoaded = false;

  constructor(private mainCategoryService: MainCategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.mainCategoryService.getCategories().subscribe((response) => {
      this.categories = response.data
      this.dataLoaded = true
    })
  }
}
