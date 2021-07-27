import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  orderForm: FormGroup
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/


  paymentOption: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ]

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder
              ) { }

  ngOnInit() {

    this.orderForm  = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    })
  }

  itemsValue(): number {
    return this.orderService.SrvItemsValue()
  }

  cartItems(): CartItemModel[] {
    return this.orderService.SrvCartItems()
  }

  increaseQty(item: CartItemModel) {
    this.orderService.SrvIncreaseQty(item)
  }

  decreaseQty(item: CartItemModel) {
    this.orderService.SrvDecreaseQty(item)
  }

  remove(item: CartItemModel) {
    this.orderService.SrvRemove(item)
  }

  checkOrder(order: OrderModel) {
    order.orderItems = this.cartItems().map((item:CartItemModel) => new OrderItem(item.quantity, item.menuItem.id) )
    console.log(order)
    this.orderService.checkOrderService(order)
      .subscribe( (orderId: string) => {
        this.router.navigate(['/order-summary'])
        console.log(`Compra concluída: ${orderId}`)
        this.orderService.SrvClear()
      }
        
    )}



}
