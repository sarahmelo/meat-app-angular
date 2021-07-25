import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'app/restaurant-detail/shopping-cart/cart-Item.model';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderItem, OrderModel } from './order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  delivery: number = 8;


  paymentOption: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItemModel[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItemModel) {
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItemModel) {
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItemModel) {
    this.orderService.remove(item)
  }

  checkOrder(order: OrderModel) {
    order.orderItems = this.cartItems().map((item:CartItemModel) => new OrderItem(item.quantity, item.menuItem.id) )
    console.log(order)
  }

}
