import { Injectable } from "@angular/core"
import { MenuItemModel } from "../menu-item/menu-item.model"
import { CartItemModel } from "./cart-Item.model"

@Injectable()
export class ShoppingCartService {
    items: CartItemModel[] = []

    clear() {
        this.items = []  
    }

    addItem(item: MenuItemModel) {
        console.log('tudo certo até aqui')
        console.log('esse é o item:', item)
        let foundItem = this.items.find((myItem) => myItem.menuItem.id === item.id)
        if(foundItem) {
            foundItem.quantity = foundItem.quantity + 1
            console.log('mais 1')
            console.log(this.items)
        } else {
            console.log('puxou')
            this.items.push(new CartItemModel(item))
            console.log('adicionou ao array:', item)
            console.log(this.items.length)
        }
        console.log(this.items)
    }

    removeItem(item: CartItemModel) {
        this.items.splice(this.items.indexOf((item),1))
    }

    total() :number  {
        return this.items
        .map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }
}