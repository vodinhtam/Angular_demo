import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() getSelectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
      new Recipe('Spagetti', 'A special dish from Italy', 'https://www.giallozafferano.com/images/228-22832/spaghetti-with-tomato-sauce_650x433_wm.jpg'),
      new Recipe('Pho', 'A traditional dish from VietNam', 'https://i0.wp.com/naungon.net/wp-content/uploads/2019/07/cach-nau-mon-pho-bo-ha-noi-ngon-chuan-vi.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.getSelectedRecipe.emit(recipe);
  }

}
