import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
        'Spagetti', 
        'A special dish from Italy', 
        'https://www.giallozafferano.com/images/228-22832/spaghetti-with-tomato-sauce_650x433_wm.jpg',
        [
          new Ingredient('Ground beef (pound)', 1),
          new Ingredient('Onion', 1),
          new Ingredient('Garlic cloves', 4),
          new Ingredient('Diced tomato (ounce)', 28)
        ]
      ),
    new Recipe(
        'Pho', 
        'A traditional dish from VietNam', 
        'https://i0.wp.com/naungon.net/wp-content/uploads/2019/07/cach-nau-mon-pho-bo-ha-noi-ngon-chuan-vi.jpg',
        [
          new Ingredient('Beef (gram)', 500),
          new Ingredient('Cow\'s bone (kg)', 17),
          new Ingredient('Ginger', 2),
          new Ingredient('Onion', 3)
        ]
      ),
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes(){
    return this.recipes;
    // return this.recipes.slice(); will return a copy
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
