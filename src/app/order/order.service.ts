import { Injectable } from "@angular/core";
import { Http, Headers ,RequestOptions } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { CartItemModel } from "app/restaurant-detail/shopping-cart/cart-Item.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping.cart.service";
import { Observable } from "rxjs/Observable";
import { OrderModel } from "./order.model";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: Http){}

    SrvCartItems(): CartItemModel[] {
        return this.cartService.items
    }

    SrvIncreaseQty(item: CartItemModel) {
        this.cartService.increaseQty(item)
    }

    SrvDecreaseQty(item: CartItemModel) {
        this.cartService.decreaseQty(item)
    }

    SrvRemove(item: CartItemModel) {
        this.cartService.removeItem(item)
    }

    SrvItemsValue(): number {
        return this.cartService.total()
    }

    SrvClear() {
        this.cartService.clear()
    }

    checkOrderService(order: OrderModel): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MEAT_API}orders`,
                                JSON.stringify(order),
                                new RequestOptions({headers: headers}))
                                .map(response => response.json())
                                .map(order => order.id)
    }

}