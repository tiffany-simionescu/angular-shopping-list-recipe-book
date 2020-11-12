import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://snappygoat.com/b/c5d6b40db9b5b7a86a6ec7b09a8307b45653cf73'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://snappygoat.com/b/c5d6b40db9b5b7a86a6ec7b09a8307b45653cf73')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
