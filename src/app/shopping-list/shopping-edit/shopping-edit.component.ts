import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IngredientModel } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit  {
  @ViewChild('nameInput', {static: false}) nameInputRef!: ElementRef;
  @ViewChild('amoutInput', {static: false}) amoutInputRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  constructor() { }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amoutInputRef.nativeElement.value;
    const newIngredient = new IngredientModel(ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

  ngOnInit(): void {
  }

}
