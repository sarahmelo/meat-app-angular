import { Component, Injectable, OnInit } from '@angular/core';
import { RestaurantModel } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})

export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantModel[];

  constructor( private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
    .subscribe( restaurants => this.restaurants = restaurants)
  }

}
