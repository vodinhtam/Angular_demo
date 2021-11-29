import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('wheat',20),
    new Ingredient('tomato',3),
    new Ingredient('egg',2)
  ];

  getIngredient(){
    return this.ingredients;
  }

  addIngredient(item: Ingredient){
    this.ingredients.push(item);
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
  }


}
