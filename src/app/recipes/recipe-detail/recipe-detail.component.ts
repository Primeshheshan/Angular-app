import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  isCollapsed = true;
  recipeItem!: RecipeModel;
  id!: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  onAddToshoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipeItem.ingredients);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this. recipeItem = this.recipeService.getRecipes(this.id);
      }
    );
  }

}
