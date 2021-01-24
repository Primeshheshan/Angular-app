import { EventEmitter, Injectable } from "@angular/core";
import { IngredientModel } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeModel } from "./recipe.model";

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();
  private recipes: RecipeModel[] = [
    new RecipeModel('Pizza',
                    'This is pizza recipe',
                    'https://bit.ly/2LEbzyZ',
                    [
                      new IngredientModel('cheese', 2),
                      new IngredientModel('sausages', 2),
                    ]),

    new RecipeModel('burger',
                    'Ground beef, or minced cow meat ',
                    'https://bit.ly/3iu86yA',
                    [
                      new IngredientModel('buns', 2)
                    ]),

    new RecipeModel(' Fried Rice',
                    'Fried rice is a dish of cooked rice that has been',
                    'https://bit.ly/38Xe0oO',
                    [
                      new IngredientModel('rice', 1)
                    ]),

  ];

  constructor(private shopingListService: ShoppingListService) {}

  // tslint:disable-next-line: typedef
  getRecipe() {
    return this.recipes.slice(); // we can get a copy of array
  }

  // tslint:disable-next-line: typedef
  addIngredientToShoppingList(ingredientVar: IngredientModel[]) {
    this.shopingListService.addIngredients(ingredientVar);
  }

  getRecipes(index: number) {
    return this.recipes[index];
  }

}
