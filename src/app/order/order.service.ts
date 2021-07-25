import { Injectable } from "@angular/core";
import { CartItemModel } from "app/restaurant-detail/shopping-cart/cart-Item.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping.cart.service";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService){}

    cartItems(): CartItemModel[] {
        return this.cartService.items
    }

    increaseQty(item: CartItemModel) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItemModel) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItemModel) {
        this.cartService.removeItem(item)
    }

    itemsValue(): number {
        return this.cartService.total()
    }
}