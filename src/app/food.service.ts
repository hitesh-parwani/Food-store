import { Injectable } from '@angular/core';
import { foods } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():foods[]{
    return[
     {
       id:1,
       name:"Pizza",
       cooktime:"string",
      price:180,
      imageurl:"./assets/banner/pizza.jpg",
      time:"20-25 min"
     },
     {
       id:2,
       name:"Burger",
       cooktime:"string",
      price:120,
      imageurl:"./assets/banner/burger.jpg",
      time:"20-25 min"
     },
     {
       id:3,
       name:"FiredRice",
       cooktime:"string",
      price:150,
      imageurl:"./assets/banner/friedrice.jpg",
      time:"20-25 min"
     },
     {
       id:4,
       name:"FrenchFries",
       cooktime:"string",
      price:110,
      imageurl:"./assets/banner/frenchfries.jpg",
      time:"20-25 min"
     },
     {
       id:5,
       name:"Sandwitch",
       cooktime:"string",
      price:140,
      imageurl:"./assets/banner/sandwitch.jpg",
      time:"20-25 min"
     },


      
    ]
  

  }
}
