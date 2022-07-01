import { Category } from './../../../models/category';
import { Component, OnInit } from '@angular/core';
import { MainCategory } from 'src/app/models/mainCategory';
import { MainCategoryService } from 'src/app/services/mainCategory.service';

@Component({
  selector: 'app-main-category-panel',
  templateUrl: './main-category-panel.component.html',
  styleUrls: ['./main-category-panel.component.css']
})
export class MainCategoryPanelComponent implements OnInit {

  items: MainCategory[] = [];
  dataLoaded = false;
  constructor(private mainCategoryService: MainCategoryService) { }

  ngOnInit(): void {
    this.getMainCategories();
  }

  getMainCategories() {
    this.mainCategoryService.getCategories().subscribe((response) => {
      this.items = response.data
      this.dataLoaded = true
    })
  }

}
