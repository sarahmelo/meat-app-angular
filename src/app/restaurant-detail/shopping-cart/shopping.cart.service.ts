import { Injectable } from "@angular/core"
import { MenuItemModel } from "../menu-item/menu-item.model"
import { CartItemModel } from "./cart-Item.model"
import { NotificationService } from "app/shared/messages/notification.service"
@Injectable()
export class ShoppingCartService {

    constructor(private notificationService: NotificationService){}
    items: CartItemModel[] = []

    clear() {
        this.items = []  
    }

    addItem(item: MenuItemModel) {
        let foundItem = this.items.find((myItem) => myItem.menuItem.id === item.id)
        if(foundItem) {
            this.increaseQty(foundItem)
        } else {
            this.items.push(new CartItemModel(item))
        }

        this.notificationService.notify(`Você adicionou ${item.name}`)

    }

    increaseQty(item: CartItemModel) {
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CartItemModel) {
        item.quantity = item.quantity - 1
        if(item.quantity === 0) {
            this.removeItem(item)
        }
    }

    removeItem(item: CartItemModel) {
        this.items.splice(this.items.indexOf((item),1))
        this.notificationService.notify(`Você removeu ${item.menuItem.name}`)
    }

    total() :number  {
        return this.items
        .map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }
}