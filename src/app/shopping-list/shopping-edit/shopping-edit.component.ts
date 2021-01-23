import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IngredientModel } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit  {
  @ViewChild('nameInput', {static: false}) nameInputRef!: ElementRef;
  @ViewChild('amoutInput', {static: false}) amoutInputRef!: ElementRef;


  constructor(private shoppingListService: ShoppingListService) { }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amoutInputRef.nativeElement.value;
    const newIngredient = new IngredientModel(ingName,ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  ngOnInit(): void {
  }

}
