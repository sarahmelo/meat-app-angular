import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private route: ActivatedRoute, private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.reviews = this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
