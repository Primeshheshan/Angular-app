import { EventEmitter, Injectable } from "@angular/core";
import { IngredientModel } from "../shared/ingredients.model";

@Injectable()

export class ShoppingListService {
  ingredientChanged = new EventEmitter<IngredientModel[]>();
  private ingredients: IngredientModel[] = [
    new IngredientModel('Potato',5),
    new IngredientModel('Tomato',10),
    new IngredientModel('Tokkmato',10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
