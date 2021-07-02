import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 recipes:Recipe[]=[
   new Recipe('A test recipe','this is simply a test','https://www.uaex.edu/life-skills-wellness/food-nutrition/eating-well/EFNEP/images/Recipes-Banner.jpg')
   ];

  constructor() { 
 
  }

  ngOnInit(): void {
  }

}
