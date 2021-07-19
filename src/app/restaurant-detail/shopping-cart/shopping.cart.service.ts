import { MenuItemModel } from "../menu-item/menu-item.model"
import { CartItemModel } from "./cart-Item.model"

export class ShoppingCartService {

    items: CartItemModel[] = []

    clear() {
        this.items = []  
    }

    addItem(item: MenuItemModel) {
        let foundItem = this.items.find((myItem) => myItem.menuItem.id === item.id)
        if(foundItem) {
            foundItem.quantity = foundItem.quantity + 1
            console.log('entrou')
        }else {
            this.items.push(new CartItemModel(item))
        }
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