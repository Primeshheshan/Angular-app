import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: RecipeModel[] = [
  new RecipeModel('Pizza',
                  'This is pizza recipe',
                  'https://bit.ly/2LEbzyZ'),

  new RecipeModel('burger',
                  'Ground beef, or minced cow meat mince or other meat used to make hamburgers',
                  'https://bit.ly/3iu86yA'),

  new RecipeModel(' Fried Rice',
                  'Fried rice is a dish of cooked rice that has been stir-fried in a wok',
                  'https://bit.ly/38Xe0oO'),

];
  constructor() { }

  ngOnInit(): void {
  }

}
