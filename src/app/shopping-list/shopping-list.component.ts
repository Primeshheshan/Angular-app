import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('Potato',5),
    new IngredientModel('Tomato',10),
    new IngredientModel('Tokkmato',10),
  ];
  constructor() { }

  onIngredientAdded(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }

  ngOnInit(): void {
  }

}
