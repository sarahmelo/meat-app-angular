import { Injectable } from "@angular/core";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import { RestaurantModel } from "./restaurant/restaurant.model";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Http } from "@angular/http";
import { ErrorHandler } from "app/app.errorHandler";
import { MenuItemModel } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {

    constructor( private http: Http ) {}

    restaurants(): Observable<RestaurantModel[]> {
      return this.http.get(`${MEAT_API}restaurants`).map(response => response.json()).catch(ErrorHandler.handleError)
    };

    restaurantById(id: string) :Observable<RestaurantModel> {
      return this.http.get(`${MEAT_API}restaurants/${id}`).map(response => response.json()).catch(ErrorHandler.handleError)
    } 

    reviewsOfRestaurant(id: string) :Observable<RestaurantModel> {
      return this.http.get(`${MEAT_API}restaurants/${id}/reviews`).map(response => response.json()).catch(ErrorHandler.handleError)
    }

    menuOfRestaurants(id: string) :Observable<MenuItemModel[]> {
      return this.http.get(`${MEAT_API}restaurants/${id}/menu`).map(response => response.json()).catch(ErrorHandler.handleError)
    }
}