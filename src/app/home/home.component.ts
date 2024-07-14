import { Component } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fooddata:any[]=[];
  constructor(private fs:FoodService){

    this.fooddata=fs.getAll();

  }
  

}
