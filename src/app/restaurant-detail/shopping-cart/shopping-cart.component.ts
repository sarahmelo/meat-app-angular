import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping.cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {

  constructor( private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {

  }

  //Expoe os item
  item(): any[] {
    return this.shoppingCartService.items;
  }
  
  clear() {
    return this.shoppingCartService.clear();
  }

  removeItem(item: any) {
    return this.shoppingCartService.removeItem(item);
  } 

  addItem(item: any) {
    return this.shoppingCartService.addItem(item)
  }

  total(): number {
    return this.shoppingCartService.total();
  }

}
