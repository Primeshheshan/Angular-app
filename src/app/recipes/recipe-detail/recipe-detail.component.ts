import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  isCollapsed: boolean = true;
  @Input() recipeItem!: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  onAddToshoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipeItem.ingredients);
  }

  ngOnInit(): void {
  }

}
